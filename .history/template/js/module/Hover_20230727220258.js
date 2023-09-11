export default function Hover() {
  try {
    const statisticMain = document.querySelector(".statistic-main");
    if(statisticMain){
      const statisticBoxItems = statisticMain.querySelectorAll(".statistic-box-item-text");
      const statisticBoxImg = statisticMain.querySelector(".statistic-box-img");
      statisticBoxItems.forEach((statisticBoxItem)=>{
        statisticBoxItem.addEventListener("mouseenter",()=>{
          statisticBoxImg.classList.add("actived");
        })

        statisticBoxItem.addEventListener("mouseleave",()=>{
          statisticBoxImg.classList.remove("actived");
        })
      })
    }
    
  } catch (error) {
    console.log(error)
  }
}
