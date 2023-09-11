export default function SplittingJS() {
  const targetSaid = document.querySelectorAll("#target-said");
  if (targetSaids) {
    targetSaids.forEach((targetSaid) => {
      const results = Splitting({ target: targetSaid, by: "words" });
      console.log(results);
    })

  }

}
