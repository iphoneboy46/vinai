export default function slideCustom() {
  const careerSlide = document.querySelector(".career-slide");
  if (careerSlide) {
    const careerSlideBtnNext = careerSlide.querySelector(
      ".career-slide-btn.next"
    );

    careerSlideBtnNext.addEventListener("click", () => {
      let careerSlideList = careerSlide.querySelector(".career-slide-list");
      let careerSlideAo = careerSlide.querySelector(".career-slide-ao");

      let careerSlideItems = careerSlide.querySelectorAll(".career-slide-item");

      careerSlideItems.forEach((careerSlideItem, index) => {
      
       
        if(index >= 1){
          setTimeout(()=>{
            careerSlideList.removeChild(careerSlideItems[0]);
            careerSlideAo.removeChild(careerSlideItems[0]);

          },500)

          careerSlideItems[0].classList.add("actived");
        }

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
