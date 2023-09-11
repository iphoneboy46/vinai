export default function GSAPJS() {
  const saidMain = document.querySelector(".said-main");
  if (saidMain) {
    if (window.screen.width > 1200) {
      const wordTexts = saidMain.querySelectorAll(".word");
      const dauPhayDB = saidMain.querySelector(".said-main-phay");
      wordTexts.forEach((wordText) => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(wordText, {
          scrollTrigger: {
            trigger: wordText,
            start: "center center",
            end: "center center",
            scrub: 2,
            pin: false,
            pinSpacing: false,
            markers: false,
          },

          duration: 2,
          ease: "none",
          opacity: 1,
          transform: "none",
          // x: "-8%",
        });
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.to(dauPhayDB, {
        scrollTrigger: {
          trigger: dauPhayDB,
          start: "center center",
          end: "center center",
          scrub: 2,
          pin: false,
          pinSpacing: false,
          markers: false,
        },

        duration: 2,
        ease: "none",
        opacity: 1,
        transform: "none",
        // x: "-8%",
      });





    }

  }
  gsap.to(".box-slide .swiper", {
    rotate: -6,
    duration: 6,
    scrollTrigger: {
      trigger: ".box-slide",
      start: "top center",
      end: "center center",
      scrub: 2,

    },
  })


  const advanced = document.querySelector(".advanced");
  if (advanced) {
    gsap.registerPlugin(ScrollTrigger);

    var timeline = gsap.timeline();
    ScrollTrigger.create({
      trigger: ".c",
      animation: timeline,
      markers: true,
      start: "top center+=300px",
      end: "top center",
      // toggleClass: "active",
      // pin: true,
      scrub: 1,

    })
    timeline.to(".b",
      {
        x: 400,
        rotation: 360,
        duration: 400

      })
      .to(".a",
        {
          x: 400,
          rotation: 360,
          duration: 200
        });


   ;
  }

}
