export default function SelectCheckbox() {
    const formSls = document.querySelectorAll(".form-sl");
    if (formSls) {
        formSls.forEach((formSl) => {
            const formSlList = formSl.querySelector(".form-sl-list");
            const formSlLabel = formSl.querySelector(".form-sl-label");
            const formSlItems = formSl.querySelectorAll(".form-sl-item");
            const formSlInput = formSl.querySelector(".form-sl-input");
            formSlLabel.addEventListener("click", () => {
                $(formSlList).slideToggle();
            });

            formSlItems.forEach((formSlItem) => {
                formSlItem.addEventListener("click", () => {
                   
                    formSlItem.classList.toggle("checked")
                })
            })

         


        })


        window.addEventListener("click", (e) => {
           
            formSls.forEach((formSl) => {
                const formSlList = formSl.querySelector(".form-sl-list");
                const formSlLabel = formSl.querySelector(".form-sl-label");
               
                if (!e.target.closest(".form-sl")) {
                    $(formSlList).slideUp();
                }
            })

        })
    }
}