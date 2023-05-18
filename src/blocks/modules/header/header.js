document.addEventListener("DOMContentLoaded", function() {
    if (window.screen.width < 1050) {
        const close = document.querySelector("#close");
        const header = document.querySelector(".header");
        const hamb = document.querySelector(".header__hamb");
        const headerM = document.querySelector(".header__mobile");

        if (close && header && hamb && headerM) {
            document.addEventListener("click", function(e) {
                if (e.target == close || close.contains(e.target)) {
                    header.classList.remove("active");
                    headerM.classList.remove("hiden");
                }  else if (e.target == hamb || hamb.contains(e.target)) {
                    headerM.classList.add("hiden");
                    header.classList.add("active");
                } else if(header.classList.contains("active") && e.target !== header && !header.contains(e.target)) {
                    header.classList.remove("active");
                    headerM.classList.remove("hiden");
                }
            });
        }
    }
});