/* ============================================================
   PENGATURAN LINK DOWNLOAD — GANTI DI SINI
   ============================================================
   1. PLAYSTORE_URL   -> isi setelah app kamu LOLOS REVIEW & LIVE
                          di Google Play (bukan pas masih Internal
                          Testing).
   2. PLAYSTORE_LIVE  -> biarkan `false` dulu. Begitu app sudah
                          live di Play Store, ganti jadi `true` —
                          SEMUA tombol "Coba Gratis"/"Download
                          Sekarang" otomatis langsung ke Play Store,
                          tidak perlu edit HTML sama sekali.
   3. APK_DOWNLOAD_URL      -> link download APK langsung (mis. dari
                                Google Drive, share-nya "Anyone with
                                the link can view").
   4. DESKTOP_DOWNLOAD_URL  -> link download ZIP versi Windows.
============================================================ */
const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.zexora.pro";
const PLAYSTORE_LIVE = false;

const APK_DOWNLOAD_URL = "https://drive.google.com/file/d/16IcUKt1xa5C6ksCYAkDWjUluvqDSG-YD/view?usp=sharing";
const DESKTOP_DOWNLOAD_URL = "GANTI_DENGAN_LINK_DESKTOP_ANDA";

document.addEventListener("DOMContentLoaded", () => {
  // Tombol "Coba Gratis" / "Download Sekarang" dkk:
  // - Kalau Play Store SUDAH live -> langsung ke Play Store.
  // - Kalau BELUM -> scroll ke bagian #unduh (APK/Desktop/WhatsApp).
  document.querySelectorAll(".js-playstore").forEach((el) => {
    if (PLAYSTORE_LIVE) {
      el.setAttribute("href", PLAYSTORE_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    } else {
      el.setAttribute("href", "#unduh");
      el.removeAttribute("target");
    }
  });

  // Tombol download APK langsung
  document.querySelectorAll(".js-apk-download").forEach((el) => {
    el.setAttribute("href", APK_DOWNLOAD_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Tombol download Desktop (Windows) langsung
  document.querySelectorAll(".js-desktop-download").forEach((el) => {
    el.setAttribute("href", DESKTOP_DOWNLOAD_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Badge/tombol Google Play di bagian #unduh: nonaktif ("Segera
  // Hadir") selama PLAYSTORE_LIVE masih false, otomatis aktif kalau
  // sudah true.
  document.querySelectorAll(".js-playstore-badge").forEach((el) => {
    if (PLAYSTORE_LIVE) {
      el.setAttribute("href", PLAYSTORE_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
      el.classList.remove("is-disabled");
      const label = el.querySelector(".dl-status");
      if (label) label.textContent = "Tersedia di Google Play";
    } else {
      el.classList.add("is-disabled");
      el.addEventListener("click", (e) => e.preventDefault());
    }
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
