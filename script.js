/* ============================================================
   GANTI LINK PLAY STORE ANDA DI SINI
   Semua tombol "Coba Gratis" / "Download" akan otomatis
   mengarah ke link ini.
============================================================ */
const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.zexora.pro";

document.addEventListener("DOMContentLoaded", () => {
  // Pasang link Play Store ke semua tombol bertanda .js-playstore
  document.querySelectorAll(".js-playstore").forEach((el) => {
    el.setAttribute("href", PLAYSTORE_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Menu mobile (hamburger)
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Navbar berubah warna saat discroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "0 6px 24px rgba(0,0,0,0.35)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
});
