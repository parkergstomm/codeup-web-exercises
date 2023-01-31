// let i = 1;
// while (i <= 65536) {
//     console.log(i *= 2);
// }
// i++;


// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside the loop, your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

var allCones = Math.floor(Math.random() * 50) + 50;
do{
  var conesSold = Math.floor(Math.random() * 5) + 1;

  if(conesSold > allCones){
console.log("Cant sell you " + conesSold + " I only have " + allCones);
  } else{
    allCones -= conesSold
    console.log(conesSold + " cones sold.");
  }

} while(allCones > 0)

console.log("whoop sold them all.");

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;

//[] write code to generate random number from 50-100
// var conesSold = Math.floor(Math.random() * 5) + 1;
// do {
//     console.log("I have more to sell!");
// } while (conesSold < 5);
//
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesSold = Math.floor((Math.random() * 4) + 1);
//     if (conesSold <= allCones){
//         console.log(conesSold + " cones sold...");
//         allCones -= conesSold;
//     } else if (conesSold >allCones){
//         console.log("Cannot sell you " + conesSold);
//     } else{
//         console.log("Yay! I sold them all.");
//         allCones -= allCones;
//     }
// } while(allCones > 0)

