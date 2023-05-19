document.addEventListener("DOMContentLoaded", function() {
    const ratingItems = document.querySelectorAll(".rating");

    if (ratingItems) {
        ratingItems.forEach(item => {
            let num = item.textContent;
            if (num >= 7) {
                item.classList.add("rating_green");
            }
        });
    }
});