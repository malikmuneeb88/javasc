// function myFunction() {
//     console.log("This office is beautifull!")
// }

// myFunction();


// function sum (x, y) {
//     add = x + y;
//     return add;
// }

// let val = sum(56, 83);
// console.log(val);


// function sum(a, b) {
//     return a + b;
// }

// // Arrow Function: 
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// function mul(a, b) {
//     return a * b;
// }

// const arrowMul = (a, b) => {
//     console.log(a * b);
// }; 



// Questions:
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }



// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }




let arr = ["NSTP", "NUST", "IQRA", "IBA", "ILMS"];

arr.forEach((val, idx, arr) => {
    console.log(val.toLowerCase(), idx, arr);
})