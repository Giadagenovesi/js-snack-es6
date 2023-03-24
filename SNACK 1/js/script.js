//Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const result = document.getElementById("small");
const bikes = [
    {
        name: "Rockrider",
        weight: 15,
    },
    {
        name: "Elops",
        weight: 13,
    },
    {
        name: "Triban",
        weight: 18,
    },
    {
        name: "Vivobike",
        weight: 20,
    },
    {
        name: "Riverside",
        weight: 25,
    }
];
console.log(bikes);


//Creo un array dove pusho i diversi pesi delle varie bici
const bikesWeight = [];
bikes.forEach((bikeElem) => {
    console.log(bikeElem);
    bikesWeight.push(bikeElem.weight);
});
console.log(bikesWeight);
//Individuo il peso minore tra quelli dell'array e lo salvo in una variabile
const smallerWeight = (Math.min(...bikesWeight));
console.log(smallerWeight);

//Imposto la variabile smaller bike che sarà uguale all'oggetto con il valore weight uguale a quello del peso più piccolo delle bici
let smallerBike = "";
bikes.forEach((bikeElem) => {
    if (smallerWeight === bikeElem.weight) {
        smallerBike = bikeElem;
    };
})
console.log(smallerBike);

//Stampo in pagina il risultato
result.innerHTML = `Se cerchi una bici super leggera allora ${smallerBike.name} è quella giusta per te, pesa solo ${smallerBike.weight} Kg ed è ultra performante!`;








