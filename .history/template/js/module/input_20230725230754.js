export default function inputForm() {
  try {
    const inputItems = document.querySelectorAll(".contact-form-input");
    if (inputItems) {
      inputItems.forEach((inputItem) => {
        const input = inputItem.querySelector(".contact-form-input input");

        input.addEventListener("keyup", () => {
          if (input.value.length > 0) {
            console.log("Asdasdasdas");
            inputItem.classList.add("hiddenLB");
          } else {
            inputItem.classList.remove("hiddenLB");
          }
        });

        inputItem.addEventListener("click", (e) => {
          const inputItemHidden = inputItem.querySelector(
            ".contact-form-input.hiddenLB"
          );

        

          if(inputItemHidden) {
            
            inputItemHidden.classList.remove("hiddenLB");
          }else{
            inputItem.classList.add("hiddenLB");

          }


        });

        // window.addEventListener("click", (e) => {
        //   if (!e.target.closest(".contact-form-input")) {
        //     inputItem.classList.remove("hiddenLB");
        //   }
        // });
      });
    }
  } catch (error) {
    console.log(error);
  }
}
