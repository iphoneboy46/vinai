export default function inputForm() {
try {
  const inputItems = document.querySelectorAll(".contact-form-input");
  if(inputItems){

    
    window.addEventListener(("click"),()=>{

    })

    inputItems.forEach((inputItem)=>{

      const input = inputItem.querySelector(".contact-form-input input");
      console.log(input.value);
      input.addEventListener("change",()=>{
       
        if(input.value.length > 1){
          
          console.log("asdasd");
          inputItem.classList.add("hiddenLB");
        }else{
          inputItem.classList.remove("hiddenLB");
  
        }
      })
     


      inputItem.addEventListener("click",()=>{
        inputItem.classList.add("hiddenLB");
      })

      
    })


  } 
} catch (error) {
  console.log(error)
}

}
