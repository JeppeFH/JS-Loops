/*Variabler*/
let gallery = document.querySelector(".gallery");
let outputForLoop = document.querySelector(".outputForLoop");
let outputWhileLoop = document.querySelector(".outputWhileLoop");
let outputDoWhileLoop = document.querySelector(".outputDoWhileLoop");

let imageSource = [
  "https://picsum.photos/300/300?random=1 ",
  "https://picsum.photos/300/300?random=2 ",
  "https://picsum.photos/300/300?random=3 ",
  "https://picsum.photos/300/300?random=4 ",
  "https://picsum.photos/300/300?random=5 ",
  "https://picsum.photos/300/300?random=6 ",
  "https://picsum.photos/300/300?random=7 ",
  "https://picsum.photos/300/300?random=8 ",
];

/*Opgave Gallery loops*/

/*For Loop*/
for (let i = 0; i < imageSource.length; i++) {
  outputForLoop.innerHTML += `<img src="${imageSource[i]}"  i++">`;
}

/*While Loop*/
let i = 0;

while (i < imageSource.length) {
  outputWhileLoop.innerHTML += '<img src="' + imageSource[i] + '" alt="Image">';
  i++;
}

/*Do While Loop*/
let a = 0;

do {
  outputWhileLoop.innerHTML += "<img>" + imageSource[i] + "<img>";
  a++;
} while (a < imageSource.length);
