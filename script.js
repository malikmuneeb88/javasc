console.log("Hello World!");

// ARITHEMATIC OPERATOR
let a = 7;
let b = 5;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log("a + b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); 
console.log("a % b = ", a % b);
console.log("a ** b =", a ** b);


// // UNARY OPERATOR
a++;
console.log("a =", a);

b--;
console.log("b =", b);


// // ASSIGNMENT OPERATOR
a += 5;
console.log("a =", a);

a -= 4;
console.log("a =", a);

b *= 5;
console.log("b =", b);

b /= 4;
console.log("b =", b);

b %= 4;
console.log("b =", b);

a **= 3;
console.log("a =", a);

//LOGICAL OPERATORS

// && koi aik bhi condition false hogi tw ye false return kre ga
let cond1 = a < 6;
let cond2 = b === 5;

console.log("cond1 && cond2 = ", cond1 && cond2);

// || koi aik bhi condition true hogi tw ye true return kre ga
let condition1 = a < 6;
let condition2 = b === 5;

console.log("cond1 || cond2 = ", cond1 || cond2);

// ! ye true ko false or false ko true bna deta hai