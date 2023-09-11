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
    if (ourPartners) {
      ourPartners.forEach((ourPartner) => {
        var swiper = new Swiper(ourPartner.querySelector(".mySwiper"), {
          slidesPerView: "auto",
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

    const boxSlides = document.querySelectorAll(".box-slide");
    if (boxSlides) {
      boxSlides.forEach((boxSlide) => {
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
      })

    }

    const boxBrands = document.querySelectorAll(".our-partners-brands");
    if (boxBrands) {
      boxBrands.forEach((boxBrand) => {
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

            600: {
              slidesPerView: 6,
              spaceBetween: 30
            },

            800: {
              slidesPerView: 10,
              spaceBetween: 30
            },

            1200: {
              slidesPerView: 12,
              spaceBetween: 40
            }
          }
        });
      })

    }

    const solutionMobi = document.querySelector(".solution-mobi");
    if (solutionMobi) {
      var swiperRt = new Swiper(solutionMobi.querySelector(".mySwiperRt"), {
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: solutionMobi.querySelector(".next-cus"),
          prevEl: solutionMobi.querySelector(".prev-cus"),
        },
        //   breakpoints: {
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 2,

        //   },
        //   1200: {
        //     slidesPerView: 1,

        //   },
        // },
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
    if (boxSlCow) {
      var swiper = new Swiper(boxSlCow.querySelector(".mySwiper"), {
        effect: "coverflow",
        grabCursor: true,
        // spaceBetween:24,
        centeredSlides: true,
        loop: true,
        speed: 800,
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 60,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        },

      });
    }


    const aboutOur = document.querySelector(".about-our");
    if (aboutOur) {
      var swiperBt = new Swiper(aboutOur.querySelector('.mySwiperBT'), {
        slidesPerView: "auto",
        loop: true,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
        speed: 800,
      });

      var swiperBt2 = new Swiper(aboutOur.querySelector('.mySwiperBT2'), {
        slidesPerView: "auto",
        loop: true,
        speed: 800,
      });

      swiperBt.controller.control = swiperBt2;
      swiperBt2.controller.control = swiperBt;
    }

    const homeBanner = document.querySelector(".banner-home");
    if (homeBanner) {
      var swiper6 = new Swiper(".mySwiperHome", {
        slidesPerView: "auto",
        grabCursor: true,
        effect: "creative",
        autoplay: {
          delay: 10000,
        },
        speed: 800,
        creativeEffect: {
        prev: {

          translate: ["-120%", 0, -500],
        },
        next: {

          translate: ["120%", 0, -500],
        },


      },
        pagination: {
        el: homeBanner.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
        },
      },
      });
  }


  const aboutMile = document.querySelector(".about-mile");
  if(aboutMile){
    var swiperNumber = new Swiper(aboutMile.querySelector(".mySwiperNumber"), {
      slidesPerView: "auto",
      loop: true,
      speed: 1200,
      allowTouchMove: false,
      // autoplay: {
      //   delay: 500,
      // },
    });

    var swiperTitle = new Swiper(aboutMile.querySelector(".mySwiperTitle"), {
      slidesPerView: "auto",
      loop: true,
      speed: 1200,
      allowTouchMove: false,
      // autoplay: {
      //   delay: 500,
      // },
    });

    var swiperYear = new Swiper(aboutMile.querySelector(".mySwiperYear"), {
      slidesPerView: "auto",
      loop: true,
      speed: 1200,
      allowTouchMove: false,
      navigation: {
        nextEl: aboutMile.querySelector(".next-cus"),
        prevEl: aboutMile.querySelector(".prev-cus"),
      },
      // autoplay: {
      //   delay: 500,
      // },
    });
  }

  } catch (error) {
  console.log(error);
}
}
