export default function HeaderModule() {
  const header = document.querySelector(".header");
  if (header){
    const btnLang = header.querySelector(".btn-lang");
    const headerLang = header.querySelector(".header-lang");
    btnLang.addEventListener("click",()=>{
      btnLang.classList.toggle("actived");
      $(headerLang).slideToggle(500);
    })

    const btnNavbar = header.querySelector(".btn-navbar");
    const menuMB = header.querySelector(".menu-mb")
    btnNavbar.addEventListener("click",()=>{
      btnNavbar.classList.toggle("actived");
      menuMB.classList.toggle("actived");
    })
  }
}
