let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


let para1 = document.querySelector("p");
console.log(para1.getAttribute("class"));

let para2 = document.querySelector("p");
console.log(para2.setAttribute("class", "newclass"));


div.style.backgroundColor = "red";

div.style.fontSize = "30px";

div.innerText = "My name is malik muneeb";

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn);

let div = document.querySelector("div");
div.after(newBtn);

let div = document.querySelector("div");
div.before(newBtn);



let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new !</i>";

document.querySelector("body").prepend(newHeading);

let para3 = document.querySelector("p");
para3.remove();

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);



let para = document.querySelector("p");
// para.getAttribute("class")

// let para = document.querySelector("p");
// para.getAttribute("class", "newClass");

para.classList.add("newClass");