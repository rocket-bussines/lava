document.addEventListener("DOMContentLoaded", function() {
    if (window.screen.width >= 1500) {
        const recomendParent = document.querySelector(".recomend__list");
        const recomendListItem = document.querySelectorAll(".recomend__list-item");

        if (recomendListItem && recomendParent) {
            recomendParent.addEventListener("click", (e) => {
                let item = e.target;
                if (item.classList.contains("recomend__list-item")) {
                    recomendListItem.forEach(item => {
                        item.classList.remove("active");
                    });
                    item.classList.add("active");
                }
            });
        }
        
    }
});