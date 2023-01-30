//Break and Continue Exercises

//1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

//[] prompt the user for an Odd number between 1 -50
//[] use a loop and BREAK statement to CONTINUE prompting user IF THEY ENTER invalid input
// function oddOneOrFifty() {
//     let num = parseInt(prompt("Enter an odd Number between 1 and 50; "));
//     console.log("Number to skip is: " + num);
//     for (let i = 1; i <= 50; i += 2) {
//     console.log("Here is an odd number: " + i);
//     } if (num === 27){
//         console.log("Yikes! skipping number: " + num);
//         break;
//     } else {
//
//     }
//
// }

var userAnswer = "";
while (true){
    userAnswer = Number(prompt("Enter an odd number between 1 and 50"));
    //
    if(userAnswer % 2 === 1 && userAnswer >= 1 && userAnswer <=50){
        break;
    }
}

for(var i = 1; i <= 50; i+=2){
    if(i === userAnswer){
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}