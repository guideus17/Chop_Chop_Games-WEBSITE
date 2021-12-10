const url = "https://guicorner.dk/chopchop/chopchopwordpress/wp-json/wp/v2/card?_embed&per_page=100";

const urlParams = new URLSearchParams(window.location.search);
const ClassSelector = urlParams.get("class");

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })

    .then((data) => {

        handData(data);
        console.log(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });




function handData(data) {
    const datafiltered=data.filter(card=>card.class==ClassSelector);
    datafiltered.forEach(showcard);


}






// -------------------------------------Clone template and put it in place---------------------------------

function showcard(card) {

    // // grab template and cloone it
    const templateSelection = document.querySelector(".templateCard").content;
    const cloneOfTemplate = templateSelection.cloneNode(true);




    // change content

    cloneOfTemplate.querySelector(".level1").src = card.level_1.guid;
    cloneOfTemplate.querySelector(".level2").src = card.level_2.guid;
    cloneOfTemplate.querySelector(".level3").src = card.level_3.guid;

    // cloneOfTemplate.querySelector(".CardImage").src = card._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;


 

    // put clone in the place
    const GridWithsongs = document.querySelector("#CardsSection");
    GridWithsongs.appendChild(cloneOfTemplate);



};


// class filter
document.querySelector("#Swordsman").setAttribute("href","cardslibrary.html?class=Swordsman");
document.querySelector("#Rogue").setAttribute("href","cardslibrary.html?class=Rogue");
document.querySelector("#Wizard").setAttribute("href","cardslibrary.html?class=Wizard");
document.querySelector("#Shaman").setAttribute("href","cardslibrary.html?class=Shaman");
document.querySelector("#Warlock").setAttribute("href","cardslibrary.html?class=Warlock");
document.querySelector("#Cleric").setAttribute("href","cardslibrary.html?class=Cleric");




if (ClassSelector == "Swordsman") {
    document.querySelector("#Swordsmanimg").src = "assets/CardsLibrary/Classes/swordsmanselected.png";
  } else if (ClassSelector == "Rogue") {
    document.querySelector("#Rogueimg").src = "assets/CardsLibrary/Classes/rogueselected.png";
  } 
  else if (ClassSelector == "Wizard") {
    document.querySelector("#Wizardimg").src = "assets/CardsLibrary/Classes/wizardselected.png";
  } 
  else if (ClassSelector == "Shaman") {
    document.querySelector("#Shamanimg").src = "assets/CardsLibrary/Classes/shamanselected.png";
  } 
  else if (ClassSelector == "Warlock") {
    document.querySelector("#Warlockimg").src = "assets/CardsLibrary/Classes/warlockselected.png";
  } 
  else if (ClassSelector == "Cleric") {
    document.querySelector("#Clericimg").src = "assets/CardsLibrary/Classes/clericselected.png";
  } 













// -------------------------------------cards open animation---------------------------------
  



// cloneOfTemplate.querySelector(".level1").addEventListener("click", opencards)


// function opencards() {

  
//     console.log("open");
    

//     cloneOfTemplate.querySelector(".level3").classList.toggle("level3move");
//     cloneOfTemplate.querySelector(".level2").classList.toggle("level2move");
//     cloneOfTemplate.querySelector(".level1").classList.toggle("level1move");   

// }


















