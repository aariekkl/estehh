// script.js

// Toggle tema gelap/terang
const toggle = document.getElementById('toggle-theme');
const body = document.body;

// Cek preferensi tema dari localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}

// Toggle handler
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

// Kirim data form ke WhatsApp
const form = document.getElementById('order-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const varian = document.getElementById('varian').value;
  const catatan = document.getElementById('catatan').value;
  const pesan = `Halo! Saya ingin memesan Es Teh Dinda:%0A%0ANama: ${nama}%0AVarian: ${varian}%0ACatatan: ${catatan}`;
  const url = `https://wa.me/6283138334108?text=${pesan}`;
  window.open(url, '_blank');
});
