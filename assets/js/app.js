/*Variabler*/
let outputForLoop = document.querySelector(".outputForLoop");
let outputWhileLoop = document.querySelector(".outputWhileLoop");
let outputDoWhileLoop = document.querySelector(".outputDoWhileLoop");

let cars = ["Suzuki", "Opel", "BMW", "Skoda", "Ford"];

/*For Loop*/
for (let i = 0; i < cars.length; i++) {
  outputForLoop.innerHTML += `<p>${cars[i]}<p>`;
}

/*While Loop*/
let i = 0;

while (i < cars.length) {
  outputWhileLoop.innerHTML += "<p>" + cars[i] + "</p>" i++  
}

/*Do While Loop*/
let a = 0;

do { outputWhileLoop.innerHTML += "<p>" + cars[i] + "</p>" a++ 
}

while (a < cars.length)
