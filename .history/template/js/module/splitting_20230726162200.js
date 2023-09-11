export default function SplittingJS() {
  const targetSaid = document.querySelector("#target-said");
  const results = Splitting({ target: targetSaid, by: "words" });
  console.log(results);
}
