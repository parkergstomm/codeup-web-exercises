"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function < analyzeColor
    // string < 'colorName' as input

 // function analyzeColor(colorName) {
 //     if (colorName === "red") {
 //         return "Strawberries are red";
 //     } else if (colorName === "blue") {
 //         return "the sky is blue";
 //     } else if (colorName === "green") {
 //         return "the grass is green.. sometimes";
 //     } else if (colorName === "indigo") {
 //         return "that is... *googles* basically violet lol";
 //     } else if (colorName === "violet") {
 //         return "basically indigo but more purple";
 //     } else if (colorName === "yellow") {
 //         return " yellow is that one color on a red light that means slow down to stop for the red, but really means 'speed up to not be stuck at the light!'"
 //     }
 //        else {
 //         return colorName + "? Hmm, dont know anything about that color";
 //     }
 // }




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// pass randomColor in analyzeColor function and console.log it

//console.log((analyzeColor(randomColor)));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
//  */
// var userColor= prompt("What is your favorite color?");
//     alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


 function calculateTotal(luckyNumber, total) {
     if (luckyNumber === 0) {
         return total;
     } else if (luckyNumber === 1) {
         return total - (total * .10);
     } else if (luckyNumber === 2) {
         return total -(total * .25);
     } else if (luckyNumber === 3) {
         return total - (total * .35);
     } else if (luckyNumber === 4) {
         return total - ( total * .50);
     } else if (luckyNumber === 5) {
         return 0;//or total - total; to equate the problem
     }
 }
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
 // var luckyNumber = Math.floor(Math.random() * 6);


 // this code below is the code that kenneth did:
 // var totalBill = prompt("How much did you pay?");
 //
 // alert("your lucky number was " + luckyNumber + ", and your total was $" + totalBill + " which means you pay $" + calculateTotal(luckyNumber,totalBill) + " today");

//this is my code that I did:
 // var bill = prompt("What was your total bill?");
 // alert("your lucky number is " + luckyNumber + "! " + "your price before your discount was $" + bill + ", and your price after the lucky number discount is $" + calculateTotal(luckyNumber,bill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// [] create a variable ____ and confirm the user if they would like to enter a number / console.log it
    // [] IF okay - prompt (ask) the user ask the user for a number / console.log it
// [] use 3 alerts below to tell the user:
    // [] ALERT - if the number was odd or even
    // [] ALERT - what the number plus 100 is
    // [] ALERT - if it was negative or positive
// [] ALERT THE USER if the user enters a value that is not of the number data type. (alert "incorrect input data type")

var wantsToGiveNumber = confirm("would you like to give a number?");

if(wantsToGiveNumber){
    alert("whoop!")

    var userNumber = parseInt(prompt("Choose a number"));

    if(isNaN(userNumber)){
        alert("that aint a number.");
    } else {
        alert("nice. you gave me the number: " + userNumber);

        var isEven = userNumber % 2 === 0;
        var addOneHundred = userNumber + 100;
        var isPositive = userNumber >= 0;

        alert("it is " + isEven + " that you number is even");
        alert("here is your number with 100 added: " + addOneHundred);
        alert("it was " + isPositive + " that your number was positive.");


    }
} else {
    alert("why tho");
}


















// var enterNumber = confirm("would you like to enter a number?");
//
//     if(enterNumber === true) {
//        parseInt(prompt("enter a number below"));
//         console.log(enterNumber);
//
//         if(enterNumber % 2 === 0) {
//             alert( enterNumber + " is even.");
//         }
//     }

