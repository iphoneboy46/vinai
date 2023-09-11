export default function SelectCheckbox() {
    const formSls = document.querySelectorAll(".form-sl");
    if (formSls) {
        formSls.forEach((formSl) => {
            const formSlList = formSl.querySelector(".form-sl-list");
            const formSlLabel = formSl.querySelector(".form-sl-label");
            const formSlItems = formSl.querySelectorAll(".form-sl-item");
          
            formSlLabel.addEventListener("click", () => {
                $(formSlList).slideToggle();
            });

            formSlItems.forEach((formSlItem) => {
                const formSlInput = formSlItem.querySelector(".form-sl-input");
                formSlItem.addEventListener("change", () => {
                    if (formSlInput.checked) {
                        formSlItem.classList.add("checked")
                    } else {
                        formSlItem.classList.remove("checked")

                    }

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