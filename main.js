console.log("hello!");


let planets = [];


// display planet 8 planet cards

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}


function executeThisCodeAfterFileLoad () {
    let data = JSON.parse(this.responseText);
    planets = data.planets;
    console.log(planets);
    createSolarCard (planets);
    // solarCard (data.planets)
    addEventListener ();
 
}

const createSolarCard = (newArray) => {
    let domString = "";
    newArray.forEach((planets) => {
        domString += `<div class ='card'>`;
        // domString +=  `<input class="x-button" type="button" value="X">`;
        domString +=    `<h2 class="planet_name">${planets.name}</h2>`;
        domString +=    `<img class ='solar_image' src= "${planets.imageUrl}">`;
        domString += `</div>`;
    });
    printToDom (domString, 'card-holder');
};




function executeThisCodeIfXHRFails(){
    console.log("something is wrong");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener ("load",executeThisCodeAfterFileLoad);
    myRequest.addEventListener("error",executeThisCodeIfXHRFails);
    myRequest.open("GET","solar.json");
    myRequest.send();
};

startApplication();

// Enlarge pic when clicked

const planetClicked = e => {
    const displayCard = e.target.parentNode.children[0].innerHTML;
    console.log(e.target.parentNode.children[0].innerHTML);
    solarCard(e);
    closeImage();
}



//AddEvent Listener to enlarge pictures
const addEventListener = () => {
    const card = document.getElementsByClassName ('card');
    console.log (card);
    
    for (let i=0; i<card.length; i++) {
        card[i].addEventListener ('click', planetClicked)
        }
};
const planet_name = document.getElementsByClassName('planet_name');


const solarCard = (e) => {
    let domString = "";
  
    planets.forEach((planet) => {
        let displayCard = e.target.parentNode.children[0].innerHTML;

        if (planet.name === displayCard) {
        domString += `<div class ='card'>`;
        domString +=  `<input id="x-button" type="button" value="X">`;
        domString +=    `<h2 class="planet_name">${planet.name}</h2>`;
        domString +=    `<img class ='solar_image' src= "${planet.imageUrl}">`;
        domString +=    `<p>"${planet.description}"</p>`;
        domString +=    `<p>"${planet.isGasPlanet}"</p>`;
        domString +=    `<p>"${planet.numberOfMoons}"</p>`;
        domString +=    `<p>"${planet.nameOfLargestMoon}"</p>`;
        domString += `</div>`;
        }
   });
    printToDom (domString, 'card-holder');
};

const closeImage = () => {
const button = document.getElementById('x-button');
button.addEventListener ('click' , startApplication);
};

//Search Bar
const search = document.getElementById('search');
search.addEventListener ('keypress', function (e) {
 searchBar(e)
 });
 searchBar = (e) => {
    console.log ('e', e);
    var sollar=[];
const searchPlanet = () => {
    let filterPlanet = e.target.value.toLowerCase();
    if (filterPlanet === planet[i].name){
        console.log("sollar", sollar);
        sollar;
        // solarCard()
    } 
};
};






// const searchBar = (e) => {
// const search = document.getElementById('search');
// search.addEventListener ('keypress', e => {
//     const filterPlanet = e.target.value.toLowerCase();
//     let filterPlanet = search.toLowerCase.value;
//     if (filterPlanet === planet[i].name){
//         solarCard()
//     } 
// };
// };

// function executeThisCodeAfterFileLoad () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     solarCard (data.planets);
//     addEventListener ();
// }


// function executeThisCodeIfXHRFails(){
//     console.log("something is wrong");
// }

// const startApp = () => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.addEventListener ("load",executeThisCodeAfterFileLoad);
//     myRequest.addEventListener("error",executeThisCodeIfXHRFails);
//     myRequest.open("GET","solar.json");
//     myRequest.send();
// };

// startApp();
