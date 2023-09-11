export default function HeaderModule() {
  const header = document.querySelector(".header");
  if (header){
    const btnLang = header.querySelector(".btn-lang");
    const headerLang = header.querySelector(".header-lang");
    btnLang.addEventListener("click",()=>{
      $(headerLang).slideToggle(500);
    })
  }
}
