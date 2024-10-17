function myFunction() {
    console.log("This office is beautifull!")
}

myFunction();


function sum (x, y) {
    add = x + y;
    return add;
}

let val = sum(56, 83);
console.log(val);


function sum(a, b) {
    return a + b;
}

// Arrow Function: 
const arrowSum = (a, b) => {
    console.log(a + b);
};

function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    console.log(a * b);
}; 



// Questions:
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}



const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}




let arr1 = ["NSTP", "NUST", "IQRA", "IBA", "ILMS"];

arr1.forEach((val, idx, arr) => {
    console.log(val.toLowerCase(), idx, arr);
})


let nums = [2, 4, 5, 8, 9];

nums.forEach((num) => {
    console.log(num * num);
});



// filter method:
let arr2 = [1, 2, 3, 4, 5, 6];
 
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);


// Reduce method:
let arr3 = [1, 2, 3, 4, 5, 6];

const output1 = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);



let arr4 = [1, 2, 3, 4, 5, 6];

const output = arr.reduce((res, curr) => {
    return res > curr ? prev : curr;
});

console.log(output);




Questions:
let marks = [91, 95, 99, 68, 65, 34, 50];

let toppers = marks.filter((val) => {
    return val > 90;
})

console.log(toppers);




let n = prompt("Enter a number :");

let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log(sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
})

console.log(factorial);