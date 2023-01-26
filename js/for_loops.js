// a for statement looks like this >

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement
// [initialExpression] is the initializing expression if even used. It usually initializes one or more loop counters, but the syntax allows and expression of any degree of complexity. IT CAN ALSO DECLARE VARIABLES

// The [conditionExpression] is what is being evaluated. If it's true, the loop statement will execute. Otherwise, it will stop. (if it is omitted (left out?) the condition will assume it's true.)

// 1. Declare and initialize the index variable to 0.
// 2. If index is not less than the array length, go to step 6.
// 3. Execute the loop body.
// 4.    Increment index.
// 5.    Go back to step 2.
// 6. Log the results.


// the statement portion is what executes.
// if an incrementExpression is present, it is also executed.

//breaking it down
// for (var i = 0; // calling the initial expression with a variable 'i' is equal to zero
//                  i < 10; // the conditionExpression will only execute and continue if the value of 'i' is less than 10
//                             i++) { // the incrementExpression is present and means it will increment the 'i'
//
//     console.log("for loop iteration #" + i);
// }
// for loops let you see and understand the looping logic at a single glance. The syntax also lets you move the index variable from the global scope into the scope of the for statement, and it helps make your code cleaner and more organized.

// Here's what it looks like all together:

 // for (var x = 10; x < 9; x++) {
 //     console.log("for loop iteration #" + x)
 // the condition was if x is less than 9, then it's true, otherwise don't run. x = 10 and is not less than 9, so it did not run.

// for (thingToCount; doIKeepCounting; howDoIChangeTheCount){
//
// }

// for (var count = 0; count < 10; count++){
//     console.log("the count is currently " + count);
// }

// for (var i = 0; i <= 100; i += 1){
//     console.log(1);
// }
//
// // two layers
//
// for (var i = 0; i <= 100; i += 1){
//
//     if(i === 23){
//         alert("yo jordan");
//     } else if(i === 13){
//         alert("jasonnnn");
//     }
//     console.log(i);
// }

//three layers

function sayHello(){
    alert("Hello!");
}



//Codeup for Exercise
//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable(){
//     var number = ;
//      for (var i = 1; i <= 10; i++){
//          var result = i + number;
//          console.log(number + " * " + i + " = " + result)
//      }
//
// }

//While Loops

// while loop is a basic looping construct that will execute a code block as long as a certain condition is true.
// SYNTAX:
//   while () {
// }

// var i = 0;
// // while (condition){
// //  do stuff
// // }
// while (i < 10){ // while loops check this condition FIRST
//     //then execute
//     console.log("i is currently - " + i);
//     // that was infinite... not good, lets make sure to change the value of i
//     i++;
// }

// var keepGoing = confirm("Do you want to see the while loop body?")
// var count = 0;
// while (keepGoing){
//     alert("This is the while loop that never ends, its just goes on and on my friends, we have seen this message " + count + " times.");
//     count++;
// }

// var keepGoing = confirm("Do you want to see the while loop body?")
// var count = 0;
// do {
//     alert("This is the while loop that never ends, its just goes on and on my friends, we have seen this message " + count + " times.");
//     count++;
//
//     keepGoing = confirm("Wanna keep going?");
// } while (keepGoing);
// do {
//     do stuff
// } while (condition)

// do {
//     //the body of a do-while loop.. will ALWAYS execute at least one time
//     console.log("will you see this?");
// } while (i < 10);



