const employee = {
    calculateTax() {
        console.log("tax rate in Pakistan is 50%");
    }
};

const aqibMuneeb = {
    salary: 50000,
};

// agr humne first function ko dusre mn call krna ho
aqibMuneeb.__proto__ = employee;