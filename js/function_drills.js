


// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

// [x] define(create) a function that has a parameter named timesFour
// [x] has to multiply the numeric by 4 / false if value is not numeric
// [] commit to git

// function timesFour(input){
//     if(!isNaN(input) || typeof input !== "string"){
//         return input * 4;
//     } else {
//         return false;
//
//     }
// }

// function timesFour(input){
//     if(!isNaN(parseInt(input))){ // if the parseInt of input is the opposite of isNaN - do the return
//         return input * 4;
//     } else { // if not - return false
//         return false;
//     }
// }

function timesFour(input){
    if(input == parseInt(input)){ // if the parseInt of input is the opposite of isNaN - do the return
        return input * 4;
    } else { // if not - return false
        return false;
    }
}


// Define a function named convertDaysToHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaysToHours, should return false.
// convertDaysToHours(0) //0
// convertDaysToHours('5') // 120
// convertDaysToHours('Texas') //false
// convertDaysToHours([2, 1, 0]) //false
// convertDaysToHours(true) //false
// convertDaysToHours(false) //false

// [x] define(create) a function named convertDaysToHours with a parameter Days
// [x] return the conversion of days into total hours
// [] if the input is not numeric or a numeric string / return false
// commit to git

function convertDaysToHours(Days){
    if(!isNaN(parseInt(Days)) && !isNaN(Days)){ //
        return Days * 24;
    } else {
        return false;
    }
}



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false



// create  a function named calculateTax that takes 2 parameters called totalPaid and taxPercent

// if both are numeric or numeric strings, the function should return total with tax added in a string looking like "$xx.xx"

function calculateTax(totalPaid, taxPercent){
    var finalPrice = totalPaid * (1 + (taxPercent / 100));
    if(!isNaN(parseInt(totalPaid)) && !isNaN(totalPaid) &&
    (!isNaN(parseInt(taxPercent)) && !isNaN(taxPercent))){
        return "$" + finalPrice.toFixed(2);
    } else {
        return false;
    }

}


// Classmates code below, just seeing how the others are doing theirs



// let input = prompt("How much is the total?");
// let inputOne = prompt("How much is the tax?");
// function calculateTax (input, inputOne){
//     input= parseInt(input);
//     inputOne = parseInt(inputOne);
//     if (isNaN(input) || isNaN(inputOne)) {
//         return false;
//     }
//     let decimal = inputOne / 100;
//     let total = input + (input * decimal);
//     console.log(total);
//     return total;
//
// }
// console.log(calculateTax(input, inputOne));