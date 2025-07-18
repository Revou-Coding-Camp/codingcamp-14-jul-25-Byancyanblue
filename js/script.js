  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

function storeName() {
  const name = document.getElementById("usernameInput").value.trim();
  if (name) {
    // Sembunyikan intro, tampilkan konten
    document.getElementById("intro").style.display = "none";
    document.getElementById("home").style.display = "flex";
    document.body.style.overflow = "auto"; // Izinkan scroll

    // Ganti greeting
    document.getElementById("heroGreeting").innerText = `Hi ${name}, I’m Assa 👋`;

    // Scroll ke paling atas
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 🔥 Refresh AOS agar elemen terdeteksi ulang
    setTimeout(() => {
      AOS.refresh();
    }, 500); // delay sedikit agar DOM stabil
  }
}


window.onload = function () {
  // Reset tampilan ke intro saat reload
  document.getElementById("intro").style.display = "flex";
  document.getElementById("home").style.display = "none";
  document.body.style.overflow = "hidden"; // Kunci scroll

  // Pastikan scroll tetap di atas saat halaman dimuat ulang
  window.scrollTo(0, 0);
};



const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const popupMsg = document.getElementById('popupMsg');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Isi pesan pop-up
    popupMsg.innerHTML = `
      <p>Halo <strong>${name}</strong>! Pesan kamu sudah kami terima.</p><br>
      <p><strong>📧 Email:</strong> ${email}</p><br>
      <p><strong>💬 Pesan:</strong><br><em>"${message}"</em></p>
    `;

    popup.classList.remove('hidden'); // Tampilkan popup
    form.reset(); // Kosongkan form
  });

function closePopup() {
    popup.classList.add('hidden'); // Sembunyikan popup
  }
