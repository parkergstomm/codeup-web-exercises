"use strict";

var car = {};

console.log(typeof car);
// "object"

"use strict";

var car = {};

// use dot notation to assign a "make" property
car.make = "Toyota";

// use array notation to assign a "model" property
car["model"] = "Camry";

// can also assign properties to an object when creating it

var car = {
    make: "Toyota",
    model: "Camry"
};

// Accessing Properties on an Object:
// object properties are accessed in the same way they are set, either via dot notation or array notation.
"use strict";

var car = {};
car.make = "Toyota";
car.model = "Camry";

// use array notation to access "make" property
console.log("The car make is: " + car["make"]);

// use dot notation to access "model" property
console.log("The car model is: " + car.model);

// Nested Values:
// The value of a property can be any valid value in JavaScript, including arrays, or other objects. This allows us to create complex data structures like the following:
let cars = [
    {
        make: "Toyota",
        model: "C-HR",
        year: "2018",
        color: "Blue",
        features: ["Automatic Windows", "Bluetooth", "GPS Navigation", "Dent on the right side"],
        owner: {
            name: "Parker Stomm",
            age: 24
        }
    },
    {
        make: "Mazda",
        model: "5",
        year: "2012",
        color: "Silver",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio", "Bad Alternator"],
        owner: {
            name: "Brandie Stomm",
            age: 24
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the first car is " + cars[0].owner.name + ", " + "and the owner of the second car is " + cars[1].owner.name + ".");

console.log("Here is all of the features for all of the cars: ");
cars.forEach(function(car){
    car.features.forEach(function(feature){
        console.log(feature);
    });
});

// Assigning Functionality to an Object
// Besides having data properties, an object can also have functions, known as methods. Creating a method on a object is much like creating a property, except the property value is a function.

"use strict";

var car = {};
car.make = "Toyota";
car.model = "C-HR";

// create a honk method on the car
car.honk = function(){
    alert("Honk! Honk!");
};

// use the honk method to use the horn
car.honk();

// The 'this' Keyword
// The 'this' keyword in JavaScript is a bit more complicated than in other languages. In other languages, like PHP or Java, this is simply a reference to the current object. In JavaScript, this can refer to a different object based on how a function is called. However, the intricacies of this are a more advanced topic.

"use strict";

var car = {};
car.make = "Toyota";
car.model = "C-HR";

// create a logMakeModel method on the car object
car.logMakeModel = function (){
    console.log("The Car make/model is: " + this.make + " " + this.model);
};

// log the make and model
car.logMakeModel();

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();


console.log("Exercise 1: ")

//[x] create object that has firstName and lastName properties with my name
//[x] store it in a variable named 'person'

var person = {};
person.firstName = "Parker",
person.lastName = "Stomm",

console.log("The Variable 'person' is equal to after putting it in an Object: " + person.firstName + " " + person.lastName);

console.log("Exercise 2: ");

//[x] create a method object sayHello
//[x] make the console say "Hello from Parker Stomm!"

person.sayHello = function(){
    console.log("Hello from " + person.firstName + " " +  person.lastName + "!");
}

person.sayHello = function(){
    console.log("Hello from " + this.firstName + " " +  this.lastName + "!");
}

// in the console.log, the person object is specific, using 'this.' is widely based and refers to itself.

person.sayHello();

console.log("Exercise 3: ");

// write a program to log to the website how much ryan, cameron and george need to pay
// hebOffer = 12%
// if itemCost > $200 - they get the discount
// if false that item cost > 200 - they pay full price
// cameron bought $180
// ryan bought $250
// george bought $320
// will need to display a line with the name of the person, the amount before discount, the discount(if any), and amount after discount.
var hebDiscount = .12;
// var newAmount = hebDiscount - (hebDiscount * shoppers.amount);
var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];


function shopperPriceAfter(amount){

    if (amount > 200){
        return amount - (hebDiscount * amount);
    } else {
        return  amount;
    }

}



shoppers.forEach((function(shopper) {
    console.log(shopper.name + ", " + shopper.amount + ", " + hebDiscount + ", " + shopperPriceAfter(shopper.amount));
}));

function discountProgram(shoppers){
    shoppers.forEach(function (shopper){
        console.log(shopper.name + " has spent $" + shopper.amount + "!")

        if(shopper.amount >= 200){
            console.log(shopper.name + " got a discount of " + (shopper.amount * 0.12).toFixed(2) + " and the total amount comes out to $" + (shopper.amount * 0.88).toFixed(2) + "!")
        } else {
            console.log("Sorry, no discount for you, " + shopper.name + ".")
        }
    })
}

discountProgram(shoppers);
// console.log(shoppers.name[0] + ", " + shoppers.amount[0] + ", " + hebDiscount + ", " + 180);

// var hebOffer = .12
// var shoppers = [
//     {name: 'Cameron', amount: 180},
//     {name: 'Ryan', amount: 250},
//     {name: 'George', amount: 320}
// ];
// function applyDiscount(){
//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//     if (shoppers.amount > 200){
//         return
//         var discountApplied = shoppers.amount -(hebOffer * shoppers.amount);
//     } else {
//         return false;
//     }
// }
// console.log(shoppers[0] + " " + shoppers.amount[0] + " " + hebOffer + " " + (hebOffer * shoppers.amount[0]));






// write a program to log to the website how much ryan, cameron and george need to pay
// hebOffer = 12%
// if itemCost > $200 - they get the discount
// if false that item cost > 200 - they pay full price
// var hebOffer = shoppers.amount * .12;
//
// function discountCheck(){
//     if (shoppers.amount >= 200){
//         return "Got offer: " + hebOffer;
//     } else{
//         return false;
//     }
// }
// console.log(shoppers.name[1] + " " + shoppers.amount, + " " + hebOffer);

console.log("Not done, Will come back to 3.");

console.log("Exercise 4: ");


// * Create an array of objects that represent books and store it in a
// * variable named `books`. Each object should have a title and an author
// * property. The author property should be an object with properties
// * `firstName` and `lastName`. Be creative and add at least 5 books to the
// * array
// *
// * Example:
// * > console.log(books[0].title) // "The Salmon of Doubt"
// * > console.log(books[0].author.firstName) // "Douglas"
// * > console.log(books[0].author.lastName) // "Adams"
// */

//[x] create an array of objects that rep books and store it in a variable named 'books'
//[x] add 5 books
var books = [
    {
        title: "The Fifth Vital",
        author: {
            firstName: "Mike",
            lastName: "Majlak",
        }
    },
    {
        title: "Catcher and the Rye",
        author: {
            firstName: "J.D.",
            lastName: "Salinger",
        }
    },
    {
        title: "Lord of the Rings",
        author: {
            firstName: "J.R.R.",
            lastName: "Tolkien",
        }
    },
    {
        title: "To Kill a Mockingbird",
        author: {
            firstName: "Harper",
            lastName: "Lee",
        }
    },
    {
        title: "A Passage to India",
        author: {
            firstName: "E.M.",
            lastName: "Forster",
        }
    },
];

console.log(books[0].title + " was written by " + books[0].author.firstName + " " + books[0].author.lastName + ".");

console.log(books[1].title + " was written by " + books[1].author.firstName + " " + books[1].author.lastName + ".");

console.log(books[2].title + " was written by " + books[2].author.firstName + " " + books[2].author.lastName + ".");

console.log(books[3].title + " was written by " + books[3].author.firstName + " " + books[3].author.lastName + ".");

console.log(books[4].title + " was written by " + books[4].author.firstName + " " + books[4].author.lastName + ".");

console.log(books);


console.log("Exercise 5:");

// Loop through the books array and output the following information about
// * each book:
//     * - the book number (use the index of the book in the array)
// * - the book title
// * - author's full name (first name + last name)
// *
// * Example Console Output:
//     *
// *      Book # 1
// *      Title: The Salmon of Doubt
// *      Author: Douglas Adams
// *      ---
// *      Book # 2
// *      Title: Walkaway
// *      Author: Cory Doctorow
// *      ---
// *      Book # 3
// *      Title: A Brief History of Time
// *      Author: Stephen Hawking
// *      ---
// *      ...
// */

books.forEach(function(book, index){
    console.log ("Book # " + (index + 1));
    console.log ("Title: " + book.title);
    console.log ("Author: " + book.author.firstName + " " + book.author.lastName);
})


var books = [
    {
        index: "Book: 1",
        title: "The Fifth Vital",
        author: {
            firstName: "Mike",
            lastName: "Majlak",
        }
    },
    {
        index: "Book: 2",
        title: "Catcher and the Rye",
        author: {
            firstName: "J.D.",
            lastName: "Salinger",
        }
    },
    {
        index: "Book: 3",
        title: "Lord of the Rings",
        author: {
            firstName: "J.R.R.",
            lastName: "Tolkien",
        }
    }
];

for(var i = 0; i < books.length; i++) {
        var bookList = books[i];
    console.log("Book #" + (i + 1));
    console.log("Title: " + bookList.title);
    console.log("Author: " + bookList.author.firstName + " " + bookList.author.lastName);
}

function createBook(title, first, last){
    return {
        title: title,
        author: {
            firstName: first,
            lastName: last,
        }
    }
}

var userTitle = prompt("enter title");
var userFirst = prompt("enter author first name");
var userlast = prompt("enter author last name");

console.log(createBook(userTitle,userFirst,userlast));









