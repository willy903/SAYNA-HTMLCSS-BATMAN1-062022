let nxt = document.querySelector(".btn_next");
let prv = document.querySelector(".btn_preve");
let i = 1;

nxt.addEventListener("click", () => {
    let allSlides = Array.from(document.querySelectorAll(".slide"));
    if (allSlides.length > 1) {
        let currentShownIndex = allSlides.findIndex(slide => slide.classList.contains("slide-shown"))
        allSlides[currentShownIndex].classList.remove("slide-shown")
        allSlides[(currentShownIndex + 1) % allSlides.length].classList.add("slide-shown")
    }
})

prv.addEventListener("click", () => {
    let allSlides = Array.from(document.querySelectorAll(".slide"));
    let currentShownIndex = allSlides.findIndex(slide => slide.classList.contains("slide-shown"))
    allSlides[currentShownIndex].classList.remove("slide-shown")
    console.log(currentShownIndex)
    allSlides[(currentShownIndex + 1) % allSlides.length].classList.add("slide-shown")
})

let btply = document.querySelector(".bouton-play");

btply.addEventListener("click", () => {
    let labelvid = document.querySelector(".label-bd-annonce");
    let ply = document.querySelector(".bd-annonce");
    document.querySelector(".bd-annonce").style.visibility = "visible";
    labelvid.style.display = "none";
    btply.style.visibility = "hidden";
    ply.play();

})