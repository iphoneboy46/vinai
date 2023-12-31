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


        window.addEventListener("click",()=>{
           if(window.target.closest(".contact-form-input")){
            inputItem.classList.remove("hiddenLB");
           }
            
        })

        inputItem.addEventListener("click", () => {
          inputItem.classList.add("hiddenLB");
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}
