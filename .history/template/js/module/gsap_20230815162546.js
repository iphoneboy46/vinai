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
    if(window.screen.width > 1200){
      gsap.registerPlugin(ScrollTrigger);

      var timeline = gsap.timeline();
      var endPoint = advanced.offsetHeight / 2;
      console.log(endPoint);
      ScrollTrigger.create({
        trigger: advanced,
        animation: timeline,
        markers: true,
        start: "top center",
        end: `+=${endPoint}`,
        // toggleClass: "active",
        // pin: true,
        scrub: 3,
        durationL: 10,
      })
  
      timeline.to(".btn-play",
        {
          opacity: 1,
          visibility: "visible",
          top: "-8%",
          left: "3%",
  
        }).to(".adv1",
          {
            opacity: 1,
            visibility: "visible",
            top: "5%",
            left: "15%"
  
          })
        .to(".adv2",
          {
            opacity: 1,
            visibility: "visible",
            top: "35%",
            left: "10%",
          })
  
        .to(".adv3",
          {
            opacity: 1,
            visibility: "visible",
            top: "90%",
            left: "35%",
          })
  
        .to(".adv4",
          {
            opacity: 1,
            visibility: "visible",
            top: "90%",
            left: "70%",
          })
  
        .to(".adv5",
          {
            opacity: 1,
            visibility: "visible",
            top: "40%",
            left: "85%",
          })
  
        .to(".adv6",
          {
            opacity: 1,
            visibility: "visible",
            top: "5%",
            left: "80%",
          })
  
        .to(".adv7",
          {
            opacity: 1,
            visibility: "visible",
            top: "-15%",
            left: "45%",
          })
        ;
    }
   
  }

  const advanced2 = document.querySelector(".advanced2");
  if (advanced2) {
    if(window.screen.width > 1200){
      gsap.registerPlugin(ScrollTrigger);

      var timeline = gsap.timeline();
      var endPoint2 = advanced2.offsetHeight / 2;
     
      ScrollTrigger.create({
        trigger: advanced2,
        animation: timeline,
        markers: true,
        start: "top center",
        end: `+=${endPoint2}`,
        // toggleClass: "active",
        // pin: true,
        scrub: 3,
        durationL: 10,
      })
  
      timeline.to(".btn-play",
        {
          opacity: 1,
          visibility: "visible",
          top: "-8%",
          left: "3%",
  
        }).to(".adv21",
          {
            opacity: 1,
            visibility: "visible",
            top: "15%",
            left: "15%"
  
          })
        .to(".adv22",
          {
            opacity: 1,
            visibility: "visible",
            top: "50%",
            left: "15%",
          })
  
        .to(".adv23",
          {
            opacity: 1,
            visibility: "visible",
            top: "85%",
            left: "15%",
          })
  
        .to(".adv24",
          {
            opacity: 1,
            visibility: "visible",
            top: "15%",
            left: "85%",
          })
  
        .to(".adv5",
          {
            opacity: 1,
            visibility: "visible",
            top: "40%",
            left: "85%",
          })
  
        .to(".adv6",
          {
            opacity: 1,
            visibility: "visible",
            top: "5%",
            left: "80%",
          })
  
        .to(".adv7",
          {
            opacity: 1,
            visibility: "visible",
            top: "-15%",
            left: "45%",
          })
        ;
    }
   
  }

}
