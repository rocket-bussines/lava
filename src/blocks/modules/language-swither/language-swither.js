document.addEventListener("DOMContentLoaded", function() {
    if (window.screen.width >= 1050) {
        const elem = document.querySelector("#language-swither");
        if (elem) {
            const li = elem.querySelectorAll("li");
            if (li) {
                elem.addEventListener("mouseenter", function () {
                    li.forEach(function (item) {
                        if (!item.getAttribute("data-active")) {
                            item.setAttribute("data-active", "");
                        }
                    });
                });
                elem.addEventListener("mouseleave", function() {
                    li.forEach(function (item) {
                        if (!item.getAttribute("data-active")) {
                            item.removeAttribute("data-active");
                        }
                    });
                });
            }
        }
    }
});
