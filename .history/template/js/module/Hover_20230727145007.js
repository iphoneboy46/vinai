export default function Hover() {
  try {
    const statisticMain = document.querySelector(".statistic-main");
    if(statisticMain){
      const statisticBoxItems = statisticMain.querySelectorAll(".statistic-box-item");
      const statisticBoxImg = statisticMain.querySelector(".statistic-box-img");
      statisticBoxItems.forEach((statisticBoxItem)=>{
        statisticBoxItem.addEventListener("mouseenter",()=>{

        })
      })
    }
    
  } catch (error) {
    console.log(error)
  }
}
