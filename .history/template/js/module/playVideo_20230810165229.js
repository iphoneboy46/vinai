export default function playVideo() {
  const videoPlayInner = document.querySelector(".video-play-inner");
  if (videoPlayInner) {
    const btnPlayVd = document.querySelector(".btn-play-vd");
    const backgroundVideo = document.querySelector(".background-vd");
   
    const nenVideo = document.querySelector(".bg-nen-vd");
  
    btnPlayVd.addEventListener("click", () => {
      videoPlayInner.play();
      btnPlayVd.classList.add("hidden");
  
    });

    // backgroundVideo.addEventListener("click", () => {
    //   videoPlayInner.pause();
    //   btnPlayVd.classList.remove("hidden");

    //   if (hddkRightVd) {
    //     hddkRightVd.classList.remove("hidden");
    //   }

     
    // });

    videoPlayInner.addEventListener("ended", () => {
        videoPlayInner.pause();
        btnPlayVd.classList.remove("hidden");
  
        
  
       
      });

      videoPlayInner.addEventListener("click", () => {
        videoPlayInner.pause();
        btnPlayVd.classList.remove("hidden");
  
        
      });
  }
}
