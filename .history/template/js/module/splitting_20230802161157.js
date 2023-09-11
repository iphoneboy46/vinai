export default function SplittingJS() {
  const targetSaid = document.querySelector("#target-said");
  if(targetSaid){
    const results = Splitting({ target: targetSaid, by: "words" });
  console.log(results);
  }
  
}
