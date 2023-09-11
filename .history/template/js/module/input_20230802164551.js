export default function inputForm() {
  try {
    const inputItems = document.querySelectorAll(".contact-form-input");
    // console.log(inputItems);
    if (inputItems) {
      inputItems.forEach((inputItem) => {
        const input = inputItem.querySelector("input");
        if (input) {
          console.log(input);

          input.addEventListener("keyup", () => {
            if (input.value.length >= 1) {
              console.log("Asdasdasdas");
              inputItem.classList.add("hiddenLB");
            } else {
              inputItem.classList.remove("hiddenLB");
            }
          });
        } else {
          
        }




      });
    }
  } catch (error) {
    console.log(error);
  }
}
