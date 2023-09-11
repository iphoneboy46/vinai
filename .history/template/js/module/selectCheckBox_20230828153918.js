export default function SelectCheckbox() {
    const formSls = document.querySelectorAll(".form-sl");
    if (formSls) {
        formSls.forEach((formSl) => {
            const formSlList = formSl.querySelector(".form-sl-list");
            const formSlLabel = formSl.querySelector(".form-sl-label");


            formSlLabel.addEventListener("click", () => {
                $(formSlList).slideToggle();
            });

            window.addEventListener("click", () => {
                if(formSlLabel.closest(".form-sl")){
                    $(formSlList).slideUp();
                }
            })
        })
    }
}