export default function inputForm() {
  try {
    const inputItems = document.querySelectorAll(".contact-form-input");
    if (inputItems) {
      inputItems.forEach((inputItem) => {
        const input = inputItem.querySelector(".contact-form-input input");

        input.addEventListener("change", () => {
          if (input.value.length >= 1) {
            inputItem.classList.add("hiddenLB");
          } else {
            inputItem.classList.remove("hiddenLB");
          }
        });

        inputItem.addEventListener("click", (e) => {
          const inputItemHidden = document.querySelector(
            ".contact-form-input.hiddenLB"
          );

          if(inputItemHidden){
            console.log(inputItemHidden);
            inputItemHidden.classList.remove("hiddenLB");
          }

          
          inputItem.classList.add("hiddenLB");
        });

        window.addEventListener("click", (e) => {
          if (!e.target.closest(".contact-form-input")) {
            inputItem.classList.remove("hiddenLB");
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}
