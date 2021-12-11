

document.querySelector("#HamburguerSymbol").addEventListener("click", menuanimation)



function menuanimation() {

    console.log("open");
    document.querySelector("nav").classList.toggle("Shownav");

    document.querySelector("#MenuHome").classList.toggle("ShowMenu");
    document.querySelector("#MenuCards").classList.toggle("ShowMenu");
    document.querySelector("#MenuDevlog").classList.toggle("ShowMenu");
    document.querySelector("#MenuFAQ").classList.toggle("ShowMenu");

}