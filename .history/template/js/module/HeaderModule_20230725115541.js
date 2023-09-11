export default function HeaderModule() {
  const lang = document.querySelectorAll(".lang");
  const toggleHd = document.querySelector(".header-btn");
  const headerCT = document.querySelector(".header-ct");
  const bg = document.querySelector(".bg-fade");
  if (lang.length > 0) {
    lang.forEach((ele, i) => {
      $(ele).click(function () {
        $(ele.querySelector(".lang-lst")).slideToggle("300", function () {
          // Animation complete.
        });
      });
    });
  }

  if (toggleHd) {
    toggleHd.addEventListener("click", () =>
}
