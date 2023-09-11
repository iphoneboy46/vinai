export default function ServicesModule() {
    const borderAnis = document.querySelectorAll('.borderAni')

    if (borderAnis.length > 0) {
        function runLine() {
            borderAnis.forEach((borderAni, i) => {
                if ($(window).scrollTop() > $(borderAni).offset().top - 500) {
                    borderAni.classList.add('active')
                }
            })
        }
        runLine();

        window.addEventListener('scroll', runLine)
    }
}