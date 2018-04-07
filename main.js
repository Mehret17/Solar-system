console.log("hello!");

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}


function executeThisCodeAfterFileLoad () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    createSolarCard (data.planets);
}

const createSolarCard = (newArray) => {
    let domString = "";
    newArray.forEach((planets) => {

        domString += `<div class ='card'>`;
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


