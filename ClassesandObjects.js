// const employee = {
//     calculateTax() {
//         console.log("tax rate in Pakistan is 50%");
//     }
// };

// const aqibMuneeb = {
//     salary: 50000,
//     calculateTax() {
//         console.log("Tax rate is 20%"); 
//     }
// };

// const aqibMuneeb2 = {
//     salary: 50000,
// };

// const aqibMuneeb3 = {
//     salary: 50000,
// };

// const aqibMuneeb4 = {
//     salary: 50000,
// };

// const aqibMuneeb5 = {
//     salary: 50000,
// };

// // agr humne first function ko dusre mn call krna ho
// aqibMuneeb.__proto__ = employee;
// aqibMuneeb2.__proto__ = employee;
// aqibMuneeb3.__proto__ = employee;
// aqibMuneeb4.__proto__ = employee;
// aqibMuneeb5.__proto__ = employee;



class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
// fortuner.setBrand("fortuner");


let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);
// lexus.setBrand("lexus");