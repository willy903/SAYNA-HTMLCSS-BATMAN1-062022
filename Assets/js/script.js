let btply = document.querySelector(".play_icon");

btply.addEventListener("click", () => {
    let labelvid = document.querySelector(".label-bd-annonce");
    let ply = document.querySelector(".bd-annonce");
    document.querySelector(".bd-annonce").style.display = "inline";
    labelvid.style.display = "none";
    ply.play();

})
var animesari = document.querySelector(".body");
animesari.addEventListener("mouseover", () => {
    var corp = document.querySelector(".corp");
    corp.style.marginLeft = "0";
    corp.style.transition = "1300ms";

})