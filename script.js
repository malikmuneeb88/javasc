// console.log("Hello World!");

// ARITHEMATIC OPERATOR
// let a = 7;
// let b = 5;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b); 
// console.log("a % b = ", a % b);
// console.log("a ** b =", a ** b);


// // UNARY OPERATOR
// a++;
// console.log("a =", a);

// b--;
// console.log("b =", b);


// // ASSIGNMENT OPERATOR
// a += 5;
// console.log("a =", a);

// a -= 4;
// console.log("a =", a);

// b *= 5;
// console.log("b =", b);

// b /= 4;
// console.log("b =", b);

// b %= 4;
// console.log("b =", b);

// a **= 3;
// console.log("a =", a);

//LOGICAL OPERATORS

// && koi aik bhi condition false hogi tw ye false return kre ga
// let cond1 = a < 6;
// let cond2 = b === 5;

// console.log("cond1 && cond2 = ", cond1 && cond2);

// || koi aik bhi condition true hogi tw ye true return kre ga
// let cond1 = a < 6;
// let cond2 = b === 5;

// console.log("cond1 || cond2 = ", cond1 || cond2);

// ! ye true ko false or false ko true bna deta hai



// CONDITIONAL STATEMENTS
// let age = 18;

// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot Vote") 
// }


// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "purple"){
//     color = "purple";
// } else {
//     color = "white";
// }
 
// console.log(color);

 
// let num = 109;

// if (num % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }   


// Ternary Operators

// let age = 15;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);



// alert("hello!");
// Q1:
// let num = prompt("Enter a number: ");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }


// // Q2:
// let score = prompt("Enter Your score (0 - 100)");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else {
//     grade = "B";
// }

// console.log("Your Grade is ", grade);


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }


// Calculate the sum of 1 to 5

// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n; i++) { 
//     sum += i;
// }
// console.log("sum of 5 is", sum);


// For-of loop

// let str = "JavaScript"
// let size = 0;

// for (let i of str) {
//     console.log(i);
//     size++;
// }
// console.log(size);


// For in loop

// let student = {
//     name: "Malik Muneeb",
//     age: 22,
//     cgpa: 2.5,
//     ispass: true,
// };

// for (let key in student) {
//     console.log(key,":", student[key]);
// }




// Question2:

// let gameNum = 25;

// let userNum = prompt("Guess the number : " );

// while (userNum != gameNum) {
//     userNum = promp("you guessed it wrong, Guess again");
// }

// console.log("congratulations, you entered the right number!");





// const product = {
//     title: "ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// console.log(product);

// const profile = {
//     username: "Malik Muneeb",
//     isFollow: false,
//     followers: 500,
//     following: 1000,
//     posts: 90,
// };

// console.log(profile);



// Strings:

// let str = "Apna College";

// console.log(str[5]);


// let object = {
//     item: "pen",
//     price: 10,
// };
// let output = `the cost of ${object.item} is ${object.price} rupees`;
// console.log(output)
// // console.log("The cost of", object.item ,  "is", object.price);
// // Template literals
// let specialString = `This is a template literal`;
// console.log(specialString);


// toUpperCase
// let str = "Malik Muneeb"
// str = str.toUpperCase();
// console.log(str)


// LowerCase
// let str = "Malik Muneeb"
// str = str.toLowerCase();
// console.log(str)



// // Trim Method
// let str = "        apna  college  JS         ";
// console.log(str.trim());




// concat method
// let str1 = "malik"
// let str2 = "muneeb"

// let res = str2.concat(str1)
// console.log(res)


// replace method
// let str = "hellow";
// console.log(str.replace("h", "y"));



// Practice Question:

// let fullName = prompt("Enter your fullname without spaces :");
// let username = "@" + fullName + fullName.length;
// console.log(username)


// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length);


// let heroes = ["superman", "batman", "spiderman", "thor", "hulk"];
// // for loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i])
// }



// let cities = ["karachi", "peshawar", "lahore", "islamabad", "sargodha"];
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }



// Questions: Arrays
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let value of marks) {
//     sum += value;
// }
// let avg = sum / marks.length;
// console.log(`The average of the class = ${avg}`);



// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items)



// Splice method
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 3, 55, 67);
// console.log(arr);

// Add Element:
// arr.splice(2, 0, 55);
// console.log(arr);

//Delete Element
// arr.splice(3, 1);
// console.log(arr);


//Replace method
// arr.splice(3, 1, 101);
// console.log(arr);




let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");
console.log(companies);