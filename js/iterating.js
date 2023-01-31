
// - Declaring Arrays -
// [] <- brackets declare that you are using an array
// ["Element01", "Element02"]
// var emptyArray = [];
// var oneArray = [1];
// var elements = [1, 2, 3, 4, 5];
// var differentElementTypes = ["string", 1,2,3, [1,2,3,4]];



// Example:
    // Title, genre, length of movie, rating out of 10
// var movie = ['Tommy boy', 'comedy', 120, 10]

// Counting Arrays:

// var movie = ['Tommy boy', 'comedy', 120, 10]

// console.log(movie.length);

// Accessing array elements
// Arrays are Zero - Index

// var movie = ['Tommy boy', 'comedy', 120, 10]
                    //0         1       2   3
// console.log("The Movie " + movie[0] + " is my fav.");
// console.log("It is full of " + movie[1] + ".");
// console.log("Its only " + movie[2] + "minutes long.");
// console.log("the movie is a definite " + movie[3] + "/10!");


//Iterating Arrays:

// for LOOP
// syntax:
    // for (initial variable; condition; increment){
            // body statement
    // }


// Example:
// var colors = ['blue', 'purple', 'green', 'red'];
//
// console.log(colors.length);
//
// for (var i = 0; i < colors.length; i++){
//     console.log("The color at index " + i + " is " + colors[i]);
//
// }

// FOR EACH LOOP:

// Syntax -
        // array.forEach(function(element, index, array)){
            // body statement
        // }

// var colors = ['blue', 'purple', 'green', 'red'];
//
// colors.forEach(function(color)){
//     console.log("Here is the color: " + colors + ".");
// }

// .forEach(function(element(string|number), index: Number, array ))




(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();


//[x]create an array
//[x] put 4 peoples names in that array
//[x] put it all in a variable

var names = ["Tony", "Joey", "Vinny", "Vince"];

//[x] console.log the number of elements in the array(count the number of names in the array and write it down)
console.log(names.length);

//[] create log statements (write down a sentence) that will print each name individually
console.log("The coolest guy in here is " + names[0] + ".");
console.log(names[1] + " went to the Pizza place to eat.");
console.log("I had to call " + names[2] + " last night about his car.");
console.log(names[3] + " Vaughn is a good actor.");

//[x] create a for loop
//[x] log the items in the array

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}

//[x] refactor(rewrite) the for loop above to use forEach

names.forEach(function(name){
    console.log("Here is the name: " + name + ".");
})

//[x] create 3 functions
//[x] they all have to return 3 separate items from array
//[x] first function has to return the first item
//[x] second function returns second item
//[x] last function has to return last item in the array

names.forEach(function(firstName){
    console.log(names[0] + " is the first name/item in the array.");
})

names .forEach(function(secondName){
    console.log(names[1] + " is the second name/item in the array.");
})

names.forEach(function(lastName){
    console.log(names[3] + " is the final name/item in the array.");
})