export default function SplittingJS() {
  const targetSaid = document.querySelectorAll("#target-said");
  if (targetSaid) {
    targetSaid.forEach((targetSaid) => {
      const results = Splitting({ target: targetSaid, by: "words" });
    
    })

  }

}
