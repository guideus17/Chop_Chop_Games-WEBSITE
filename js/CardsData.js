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