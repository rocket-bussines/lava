document.addEventListener("DOMContentLoaded", function(){
    const recomend = document.querySelector(".main__video-block");
    const recomendBtn = document.querySelector(".main__video-block-more");
    if (recomend && recomendBtn) {
        recomendBtn.addEventListener("click", function(){
            recomend.classList.toggle("active");
        });
    }
});
