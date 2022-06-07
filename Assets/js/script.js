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

// setInterval(slid_next, time);