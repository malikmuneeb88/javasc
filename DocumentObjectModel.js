let button = document.getElementById("myId");
console.dir(button);

let paragraphs = document.getElementsByTagName("p");
console.dir(paragraphs);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);


let firstElement = document.querySelector("p");
console.dir(firstElement);

let allElements = document.querySelectorAll("p");
console.dir(allElements);


let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from malik muneeb and from apna college"

let divs = document.querySelectorAll(".box");

let index = 1;
for (div of divs) {
    div.innerText = `this is the new first box ${index}`;
    index++;
}
