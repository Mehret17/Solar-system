console.log("hello!");


let planets = [];


// display planet 8 planet cards

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};


function executeThisCodeAfterFileLoad () {
    let data = JSON.parse(this.responseText);
    planets = data.planets;
    console.log(planets);
    createSolarCard(planets);
    addEventListener ();
};

const createSolarCard = (newArray) => {
    let domString = "";
    newArray.forEach((planets) => {
        domString += `<div class ='card' id = ${planets.name}>`;
        domString +=    `<h2 class="id">${planets.name}</h2>`;
        domString +=    `<img class ='solar_image' src= "${planets.imageUrl}">`;
        domString += `</div>`;
    });
    printToDom (domString, 'card-holder');
};




function executeThisCodeIfXHRFails(){
    console.log("something is wrong");
};

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
};


//AddEvent Listener to enlarge pictures
const addEventListener = () => {
    const card = document.getElementsByClassName ('card');
    console.log (card);
    
    for (let i=0; i<card.length; i++) {
        card[i].addEventListener ('click', planetClicked)
        }
};


const solarCard = (e) => {
    let domString = "";
  
    planets.forEach((planet) => {
        let displayCard = e.target.parentNode.children[0].innerHTML;
        if (planet.name === displayCard) {
        domString += `<div class ='card' id = id="planet_name">`;
        domString +=  `<input id="x-button" type="button" value="X">`;
        domString +=    `<h2 id="planet_name">${planet.name}</h2>`;
        domString +=    `<img class ='solar_image' src= "${planet.imageUrl}">`;
        domString +=    `<p>"${planet.description}"</p>`;
        domString +=    `<p>"${planet.isGasPlanet}"</p>`;
        domString +=    `<p>"${planet.numberOfMoons}"</p>`;
        domString +=    `<p>"${planet.nameOfLargestMoon}"</p>`;
        domString += `</div>`;
        }
   });
    printToDom (domString, 'card-holder');
    console.log(domString);
};

const closeImage = () => {
const button = document.getElementById('x-button');
button.addEventListener ('click' , startApplication);
};

// //Search Bar

const searchPlanet = (e) => {
  const searchInput = e.target.value.toLowerCase();
  const card = document.getElementsByClassName('card');
  for (let i = 0; i < card.length; i++) {
    if(card[i].innerText.toLowerCase().indexOf(searchInput) > -1) {
      card[i].style.display = "";
   } else {
       card[i].style.display = "none";
    };
  };
};

const searchEvent = (e) => {
const search = document.getElementById('search');
search.addEventListener('keyup', searchPlanet);
};

searchEvent();









