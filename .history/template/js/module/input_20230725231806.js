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

        // inputItem.addEventListener("click", (e) => {
        //   const input = inputItem.querySelector(".contact-form-input input");
        //   const inputItemHidden = document.querySelector(
        //     ".contact-form-input.hiddenLB"
        //   );

        //   if(inputItemHidden) {
        //     inputItemHidden.classList.remove("hiddenLB");
        //   }

        //   if(inputItemHidden && input.value.length > 0) {
           
        //     inputItemHidden.classList.remove("hiddenLB");
        //   }

        //   inputItem.classList.add("hiddenLB");


        // });

        window.addEventListener("click", (e) => {
          const input = inputItem.querySelector(".contact-form-input input");
          if (!e.target.closest(".contact-form-input") && input.value.length >= 1) {
            inputItem.classList.remove("hiddenLB");
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}
