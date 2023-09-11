export default function SelectCheckbox() {
    const formSls = document.querySelectorAll(".form-sl");
    if (formSls) {
        formSls.forEach((formSl) => {
            const formSlList = formSl.querySelector(".form-sl-list");
            const formSlLabel = formSl.querySelector(".form-sl-label");

            
            formSlLabel.addEventListener("click", () => {
                if (!formSl.closest(".form-sl-label")) {
                    $(formSlList).slideDown();
                } else {
                    $(formSlList).slideUp();
                }
    
            });


        })
    }
}