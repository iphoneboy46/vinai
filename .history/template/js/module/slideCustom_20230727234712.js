export default function slideCustom() {
  const careerSlide = document.querySelector(".career-slide");
  if (careerSlide) {
    const careerSlideBtnNext = careerSlide.querySelector(
      ".career-slide-btn.next"
    );

    careerSlideBtnNext.addEventListener("click", () => {
      let careerSlideList = careerSlide.querySelector(".career-slide-list");
      let careerSlideItems = careerSlide.querySelectorAll(".career-slide-item");

      careerSlideList.removeChild(careerSlideItems[0]);

      careerSlideItems.forEach((careerSlideItem, index) => {
        careerSlideItems[0].classList.add("actived");
        console.log(index[0]);
      });
    });

    const careerSlideBtnPrev = careerSlide.querySelector(
      ".career-slide-btn.prev"
    );

    careerSlideBtnPrev.addEventListener("click", () => {
      let careerSlideList = careerSlide.querySelector(".career-slide-list");
      let careerSlideItems = careerSlide.querySelectorAll(".career-slide-item");

      careerSlideList.appendChild(careerSlideItems[0]);
    });
  }
}
