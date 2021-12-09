const url = "https://guicorner.dk/chopchop/chopchopwordpress/wp-json/wp/v2/card?_embed";

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
    cloneOfTemplate.querySelector(".CardImage").src = card._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;



 // class filter
    document.querySelector("#Swordsmanid").setAttribute("href","cardslibrary.html?class=Swordsman");
    document.querySelector("#Rogueid").setAttribute("href","cardslibrary.html?class=Rogue");
    document.querySelector("#Wizardid").setAttribute("href","cardslibrary.html?class=Wizard");
    document.querySelector("#Shamanid").setAttribute("href","cardslibrary.html?class=Shaman");
    document.querySelector("#Warlockid").setAttribute("href","cardslibrary.html?class=Warlock");
    document.querySelector("#Clericid").setAttribute("href","cardslibrary.html?class=Cleric");


    // put clone in the place
    const GridWithsongs = document.querySelector("#CardsSection");
    GridWithsongs.appendChild(cloneOfTemplate);
};




















