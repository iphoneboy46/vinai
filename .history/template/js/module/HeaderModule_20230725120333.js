export default function HeaderModule() {
  const header = document.querySelector(".header");
  if (header){
    const btnLang = header.querySelector(".btn-lang");
    const headerLang = header.querySelector(".header-lang");
    btnLang.addEventListener("click",()=>{
      btnLang.classList.toggle("actived")
      $(headerLang).slideToggle(500);
    })
  }
}
