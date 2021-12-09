const url = "https://guicorner.dk/chopchop/chopchopwordpress/wp-json/wp/v2/card?_embed";


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
    data.forEach(showcard);

}


// -------------------------------------Clone template and put it in place---------------------------------

function showcard(card) {

    // // grab template and cloone it
    const templateSelection = document.querySelector(".templateCard").content;
    const cloneOfTemplate = templateSelection.cloneNode(true);


    // change content
    cloneOfTemplate.querySelector(".CardImage").src = card._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;


    // put clone in the place
    const GridWithsongs = document.querySelector("#CardsSection");
    GridWithsongs.appendChild(cloneOfTemplate);
};















// -------------------------------------filter class---------------------------------
document.querySelector("#ButtonSearch").addEventListener("click", runclassSelector)


function runclassSelector() {
    var ClassSelected = document.getElementById("ClassSelector").value;





   if (ClassSelected == "Swordsman") {


    console.log("Swordsman FILTER");


  } else if (ClassSelected == "Rogue") {

    

    console.log("ROGUE FILTER");


  } else if (ClassSelected == "Wizard") {


    console.log("Wizard FILTER");


  }
  else if (ClassSelected == "Shaman") {


    console.log("Shaman FILTER");


  }
  else if (ClassSelected == "Warlock") {


    console.log("Warlock FILTER");


  }
  else if (ClassSelected == "Cleric") {


    console.log("Cleric FILTER");


  }



  }












