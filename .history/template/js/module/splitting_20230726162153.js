export default function SplittingJS() {
  const targetSaid = document.querySelector("#target-said");
  const results = Splitting({ target: target, by: "words" });
  console.log(results);
}
