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

// function sayHello(){
//     alert("Hello!");
// }
//
// for (var i = 0; i<= 5; i++){
//     sayHello();
// }
//
// //four layers
//
// function myCount(numberToCountTo){
//     for(let i = 0; i < numberToCountTo; i++){
//         console.log(i);
//
//         //refactor w/ continue;
//
//         if (i % 2 === 0){
//             alert("Even numbers are cool");
//             alert("i is currently " + i);
//         } else {
//             alert("odd numbers are weird!, skipping the rest of the code but NOT breaking out of the loop.")
//             continue; // I want to CONTINUE LOOPING, but hop back to the 'start' of my loop (for loop will start with the condition check again).
//             alert("Will you see me? I am the alert below continue in the else on line 80.")
//         }
//
//         //refactor with break;
//
//         if (i === 13){
//             alert("Oops - hit a favorite number!");
//             break; //break me out of the loop
//         } else if (i === 15){
//             alert("will the break stop it?");
//         }
//     }
//
//     alert("Hey, we finished counting!");
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





//Codeup for Exercises

//1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable(){
//     var number = parseInt(prompt("Enter a number: "));
//      for (var i = 1; i <= 10; i++){
//          var result = i * number;
//          console.log(number + " * " + i + " = " + result)
//      }
//
// }

function showMultiplicationTable(x){
    for (var i = 0; i <= 10; i++){
        var num = x + " * " + i + " = " + x * i;
        console.log(num);
    }
    return "Complete";
}

// 2. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.


var randNum = Math.round(Math.random() * 200) + 1;

function randomTen(num){
    for (var i = 20; i <= 200; i++){

        if( i % 2 === 0){
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }

    }

}

// if the var is outside, it will only generate 1 number 10 times / if it is inside, it will generate 10 numbers 10 times

for (var i=0; i<10; i++){
    var random = Math.floor((Math.random() * 180) + 20)
    if(random % 2 === 0){
        console.log(random + " is even.");
    } else {
        console.log(random + " is odd.");
    }
}

// 3.Create a for loop that uses console.log to create the output shown below.

//
for (var i = 1; i<=9; i++){
    var iString = "";
    for(var n=1; n<=i; n++){
       iString += i;
    }
    console.log(iString);
}

// for(var i=1; i<=9; i++);{
//     console.log(i.toString().repeat(i))
// }




//    //pattern variable carries the final pattern in string format
//  let pattern = "";
//
// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= 9; n++) {
//     for (let num = 1; num <= n; num++) {
//         pattern += n; //
//     }
//     // Add a new line character after contents of each line
//         pattern += "\n";
// }
// console.log(pattern);


// 4. Create a for loop that decrements by 5 starting at 100 and ending at 5.

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}


