alert("hello!");
Q1:
let num = prompt("Enter a number: ");

if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is not a multiple of 5");
}


// Q2:
let score = prompt("Enter Your score (0 - 100)");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else {
    grade = "B";
}

console.log("Your Grade is ", grade);