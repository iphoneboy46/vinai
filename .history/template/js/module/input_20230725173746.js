export default function inputForm() {
try {
  const inputItems = document.querySelectorAll(".contact-form-input");
  if(inputItems){
    window.addEventListener(("click"),()=>{
      
    })

    inputItems.forEach((inputItem)=>{
      inputItem.addEventListener("click",()=>{
        inputItem.classList.add("hiddenLB");
      })
    })
  } 
} catch (error) {
  console.log(error)
}

}
