export default function slideCustom() {
  (() => {
    const careerSlide = document.querySelector(".career-slide");
    if (careerSlide) {
      const careerSlideBtnNext = careerSlide.querySelector(
        ".career-slide-btn.next"
      );

      var i = 1;
     

      careerSlideBtnNext.addEventListener("click", () => {
        let numPage = careerSlide.querySelector(".career-slide-num");
        i++;
        let careerSlideList = careerSlide.querySelector("#slide-list");
        let careerSlideAo = careerSlide.querySelector("#slide-ao");
        let careerSlideItems =
          careerSlideList.querySelectorAll(".career-slide-item");

        if (i <= 8) {
          console.log(i);
          numPage.innerHTML = i;
        }

        careerSlideItems.forEach((careerSlideItem, index) => {
          if (careerSlideItems.length > 1) {
            setTimeout(() => {
              careerSlideItems[0].remove();
              // careerSlideList.removeChild(careerSlideItems[0]);
              careerSlideAo.appendChild(careerSlideItems[0]);
            }, 500);

            careerSlideItems[0].classList.add("actived");
          }
        });
      });


      const careerSlideBtnPrev = careerSlide.querySelector(
        ".career-slide-btn.prev"
      );

      careerSlideBtnPrev.addEventListener("click", () => {
        let careerSlideList = careerSlide.querySelector("#slide-list");
        let careerSlideAo = careerSlide.querySelector("#slide-ao");
        let careerSlideItems =
          careerSlideAo.querySelectorAll(".career-slide-item");
          let numPage = careerSlide.querySelector(".career-slide-num");
          var i = 1;
          if (i <= 1) {
            console.log(i);
            numPage.innerHTML = i--;
          }

        careerSlideItems.forEach((careerSlideItem, index) => {
          setTimeout(() => {
            careerSlideList.prepend(
              careerSlideItems[careerSlideItems.length - 1]
            );
            const item = careerSlideAo.querySelectorAll(".careerSlideItems");
            item[careerSlideItems.length - 1]?.remove();
            // careerSlideAo.removeChild(
            //   careerSlideItems[careerSlideItems.length - 1]
            // );
          }, 500);

          careerSlideItems[careerSlideItems.length - 1].classList.remove(
            "actived"
          );
        });
      });
    }
  })();
}
