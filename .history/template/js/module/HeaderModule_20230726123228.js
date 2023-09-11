export default function HeaderModule() {
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1) {
        header.classList.add("actived");
      } else {
        header.classList.remove("actived");
      }
    });

    const btnLang = header.querySelector(".btn-lang");
    const headerLang = header.querySelector(".header-lang");
    btnLang.addEventListener("click", () => {
      btnLang.classList.toggle("actived");
      $(headerLang).slideToggle(500);
    });

    const btnNavbar = header.querySelector(".btn-navbar");
    const menuMB = document.querySelector(".menu-mb");
    const modalMB = document.querySelector(".menu-modal");
    btnNavbar.addEventListener("click", () => {
      btnNavbar.classList.toggle("actived");
      menuMB.classList.toggle("actived");
      modalMB.classList.toggle("actived");
      document.body.classList.toggle("actived");
    });

    modalMB.addEventListener("click", () => {
      btnNavbar.classList.toggle("actived");
      menuMB.classList.toggle("actived");
      modalMB.classList.toggle("actived");
      document.body.classList.toggle("actived");

    });
  }
}
