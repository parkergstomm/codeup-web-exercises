//This is where you input the console.log to get it in the console

console.log("Hello from external JavaScript");

//Next is to do an alert() to say "welcome to my Website!"
alert("Welcome to my Website!"); //It works!

//Now we use prompt() to ask for the users favorite color - then an alert response that that color is your favorite color as well.
var favColor = "blue";
prompt("What is your favorite color?");

alert("Hey! " + favColor + " is my favorite color too!");

//Exercise 3 question 1 >> You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var moviePricePerDay = 3;
var littleMer = 3;
var brotherB = 5;
var hercules= 1;
var total = (littleMer + brotherB + hercules) * moviePricePerDay;

//Now we use an alert prompt to ask the user the question
alert("Hey, I got a question for you that i need answered real quick, you ready?");
alert("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");

prompt("How much did she have to pay?");
var correctAnswer = confirm("Are you sure the answer is " + total + "?");

alert(total + " is Correct!");

//Next question >> Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

//First create variables for the 3 companies and their respective rates per hour ..
var Google = 400;
var Amazon = 380;
var Facebook = 350;

//now the variable for your paycheck (total hours at each company added up all in one.)
var myPayCheck = (Google * 10) + (Amazon * 6) + (Facebook * 4);

//Now to start asking the user on th website if they can answer the question for me
alert("Alright, now that that question is answered, I have a new question for ya.");

alert("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.");

alert("Alright, lets break it down.");
//prompt for asking how much the 3 companies paid  all in separate prompts
Google = prompt("How much is Googles hourly rate?");
alert(Google + " is correct!");

//Now we prompt for amazons rate
Amazon = prompt("Alright, how much does Amazon pay?");
alert(Amazon + " is right!");

//Time for Facebook's rate!
Facebook = prompt("How much does the good ole Facebook pay?");
alert(Facebook + " is right!");

// now time to ask the grand total
alert("Alright, now lets go back to the hours you put in and put it all together!");
prompt("Putting the hours with the rates of all 3 companies, What would your paycheck be ?");
alert(myPayCheck + " is right! Thanks for the help on that.");


//now on to problem 3>>

alert("Alright, Next one. A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.")

//Create variables for the problem

var isClassFull = confirm("Is the Class full?");
var conflictWithSchedule = confirm("Does their daily schedule allow them to attend class?");
var canEnroll = (isClassFull && conflictWithSchedule);
// Now we alert to them if they can attend the class or not>>

 alert("Nice! It's " + canEnroll + " that you can enroll. Get to studying!");

 //now on to the final question. >>
alert("Alright, one last situation and I'll leave you be.. or will I? ;D");

//alert style the question to the user>>
alert("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.");
alert("For scenario purposes, you have 6 items in your cart.")
//now to set up the prompt/confirm ordealios (kinda like the previous one!)

var cartSize = confirm("Is your cart size 2 or more?");
var validOffer = confirm("Is the offer still valid?");
var hasPremium = confirm("Are you a member?");
var canGetProductOffer = (cartSize && validOffer) || hasPremium;

//Now to alert the user that they can use the product offer
 alert("Nice! its " + canGetProductOffer + " that you can get the discount. Happy shopping!");


//Now to push to git and commmmmmmmmmmmmmit!!!