

document.querySelector("#HamburguerSymbol").addEventListener("click", menuanimation)



function menuanimation() {

    console.log("open");
    document.querySelector("nav").classList.toggle("Shownav");

}