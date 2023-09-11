export default function SwiperModule() {
  try {
    const eleFree = document.querySelectorAll(".free-slide");

    if (eleFree) {
      eleFree.forEach((ele, i) => {
        var swiper2 = new Swiper(ele.querySelector(".swiper"), {
          slidesPerView: "auto",
          lazy: !0,
          pagination: {
            el: ele.querySelector(".swiper-pagination"),
            clickable: !0,
          },
          loop: ele.querySelector(".swiper").classList.contains("--loop"),
          navigation: {
            nextEl: ele.querySelector(".next"),
            prevEl: ele.querySelector(".prev"),
          },
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
        if (!ele.querySelector(".swiper").classList.contains("--auto")) {
          swiper2.autoplay.stop();
        }
      });
    }

    const ourPartners = document.querySelectorAll(".our-partners");
    if(ourPartners){
      ourPartners.forEach((ourPartner)=>{
        var swiper = new Swiper(ourPartner.querySelector(".mySwiper"), {
          slidesPerView:"auto",
          speed: 1000,
          // loop:true,
          
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false,
          // },

          
          navigation: {
            nextEl: ourPartner.querySelector(".next"),
            prevEl: ourPartner.querySelector(".prev"),
          },

         
        });
      })
    } 

    const boxSlide = document.querySelector(".box-slide");
    if (boxSlide) {
      var swiper = new Swiper(boxSlide.querySelector(".mySwiper"), {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
        },
      });
    }

    const boxBrand = document.querySelector(".our-partners-brands");
    if (boxBrand) {
      var swiper = new Swiper(boxBrand.querySelector(".mySwiperBrands"), {
        slidesPerView: 4,
        spaceBetween: 12,
        // centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
        },

        breakpoints: {
          
          800: {
            slidesPerView: 6,
            spaceBetween: 30
          },
         
          800: {
            slidesPerView: 8,
            spaceBetween: 30
          },
         
          1200: {
            slidesPerView: 12,
            spaceBetween: 40
          }
        }
      });
    }

    const solutionMobi = document.querySelector(".solution-mobi");
    if (solutionMobi) {
      var swiperRt = new Swiper(solutionMobi.querySelector(".mySwiperRt"), {
        slidesPerView: 1,
        speed: 800,
        navigation: {
          nextEl: solutionMobi.querySelector(".next-cus"),
          prevEl: solutionMobi.querySelector(".prev-cus"),
        },
      });

      var swiperLf = new Swiper(solutionMobi.querySelector(".mySwiperLf"), {
        slidesPerView: 1,
        speed: 800,
        // navigation: {
        //   nextEl: solutionMobi.querySelector(".next-cus"),
        //   prevEl: solutionMobi.querySelector(".prev-cus"),
        // },
      });

      swiperRt.controller.control = swiperLf;
      swiperLf.controller.control = swiperRt;
    }



    const boxSlCow = document.querySelector(".box-sl-cow");
    if(boxSlCow){
      var swiper = new Swiper(boxSlCow.querySelector(".mySwiper"), {
        effect: "coverflow",
        grabCursor: true,
        // spaceBetween:24,
        centeredSlides: true,
        loop:true,
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
      },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }

    


  } catch (error) {
    console.log(error);
  }
}
