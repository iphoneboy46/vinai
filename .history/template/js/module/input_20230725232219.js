export default function inputForm() {
  try {
    const inputItems = document.querySelectorAll(".contact-form-input");
    if (inputItems) {
      inputItems.forEach((inputItem) => {
        const input = inputItem.querySelector(".contact-form-input input");

        input.addEventListener("keyup", () => {
          if (input.value.length >= 1) {
            console.log("Asdasdasdas");
            inputItem.classList.add("hiddenLB");
          } else {
            inputItem.classList.remove("hiddenLB");
          }
        });

        if(input.focus()) {
          console.log("Asdas");
        }
 
      });
    }
  } catch (error) {
    console.log(error);
  }
}
