export default function seeMore() {
  const newsCt = document.querySelector(".news-ct");
  if(newsCt){
    const parentWrapper = document.querySelector(".parent-wrapper");
    if (parentWrapper) {
      let heightParent = parentWrapper.clientHeight;
  
      parentWrapper.style.height = heightParent / 1.4 + "px";
  
      const btnSeeMore = document.querySelector(".btn-see-more");
      if (btnSeeMore) {
        const btnExitMore = document.querySelector(".btn-exit-more");
        btnSeeMore.addEventListener("click", () => {
          btnSeeMore.style.display = "none";
          btnExitMore.style.display = "block";
          parentWrapper.style.height = heightParent + "px";
        });
      }
  
      const btnExitMore = document.querySelector(".btn-exit-more");
      btnExitMore.style.display = "none";
  
      if (btnExitMore) {
        const btnSeeMore = document.querySelector(".btn-see-more");
  
        btnExitMore.addEventListener("click", () => {
          btnSeeMore.style.display = "block";
          btnExitMore.style.display = "none";
          parentWrapper.style.height = heightParent / 1.4 + "px";
        });
      }
    }
  }

  
  
}
