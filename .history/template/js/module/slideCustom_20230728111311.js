export default function slideCustom() {
  
  (() => {
    const careerSlide = document.querySelector(".career-slide");
    if (careerSlide) {
      const careerSlideBtnNext = careerSlide.querySelector(".career-slide-btn.next");
  
      careerSlideBtnNext.addEventListener("click", () => {
        let careerSlideList = careerSlide.querySelector("#slide-list");
        let careerSlideAo = careerSlide.querySelector("#slide-ao");
        let careerSlideItems = careerSlideList.querySelectorAll(".career-slide-item");
  
      
        careerSlideItems.forEach((careerSlideItem, index) => {
          
          if (careerSlideItems.length > 1) {
           
            setTimeout(() => {
              careerSlideList.parentElement.remove(careerSlideItems[0]);
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
        let careerSlideItems = careerSlideAo.querySelectorAll(".career-slide-item");
  
      
        careerSlideItems.forEach((careerSlideItem, index) => {
          
        
           
            setTimeout(() => {
             
              careerSlideList.prepend(careerSlideItems[careerSlideItems.length - 1]);
              careerSlideAo.removeChild(careerSlideItems[careerSlideItems.length - 1]);
            }, 500);
  
            careerSlideItems[careerSlideItems.length - 1].classList.remove("actived");
          
        });
      });
    }
  })();
  

  
}
