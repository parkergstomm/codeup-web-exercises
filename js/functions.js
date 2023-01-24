"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// task out the word problem, dont get caught up in the problem!

// name of function < name is sayHello
// one parameter < label should be 'name'
// return a string < string should cocatenate "Hello, " + the input / the argument
function sayHello(name){

    return "Hello, " + name + "!";
}
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// call my function
// use my name as a string < as the input / the argument
// the result! the return needs to end up var named "helloMessage"
// after alll the above: console.log the var


var helloMessage = sayHello("Parker");

console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Parker";

console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number){
    return number === 2;
}
console.log(random);
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(percentage, total){// keyword nameofFunction(input or param of function) {body of function} <return statement /whatever is beyond return is the outcome
    return percentage * total;

}
console.log(calculateTip(.20,30));//should be 6
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
alert("Hey there, thanks for eating with us today! We have a simple tip calculator built in for your convenience. Just hit okay and answer some questions!");

var mealTotal = Number(prompt("How much was your meal today?"));//creating a variable named mealTotal and asking the user by prompt what the total cost of the meal was
var tipAmount = Number(prompt("What percentage would you like to tip today?"));// creating a variable named tipAmount and prompting the user to put in the number that they want to tip
var tipTotal = tipAmount/100; // their number that they want to tip is divided by 100
var dollarAmountToTip = calculateTip(tipTotal, mealTotal).toFixed(2); //

alert("Alright, looks like you will need to tip $" + dollarAmountToTip + " in order to get that percentage. Thanks again for eating with us!")


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

var discountPercentage = .2;
var originalPrice = 100;

function applyDiscount(originalPrices, discountPercentages) {
    var discountP = originalPrice * discountPercentage;
    return originalPrice - discountP;
}
console.log(applyDiscount(100, .2))


