// // 1. Write a program to take “city” name as input from user. If user enters 
// // “Karachi”, welcome the user like this: “Welcome to city of lights”

var city = prompt("Enter Your City Name");

if(city === "Karachi"){
    document.write("Welcome to the city of lights");
}


// // 2. Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

var gender = prompt("What is your gender?");

if(gender === "male"){
    document.write("Good Morning Sir");
}
if(gender === "female"){
    document.write("Good Morning Ma'am");
}


// // 3. Write a program to take input color of road traffic signal
// // from the user & show the message according to this table:

var color = prompt("Enter the color of road traffic signal");

if(color === "Red"){
    document.write("Must Stop");
}
else if(color === "Yellow"){
    document.write("Ready to move");
}
else if(color === "Green"){
    document.write("Move now");
}

// // 4. Write a program to take input remaining fuel in car (in
// // litres) from user. If the current fuel is less than 0.25litres,
// // show the message “Please refill the fuel in your car”

var fuel = prompt("How much fuel remaining in your car?");

if(fuel < 0.25){
    document.write("Please refill the fuel in your car");
}


// // Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.

// // a.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// // b.

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


// // c.

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


// // d.

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


// // e.

if(true){
    alert("True");
}
if(false){
    alert("False");
}


// // f.

if("car" < "cat"){
    alert("car is smaller than cat");
}


// // 6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table

document.write("<h1> Marks Sheet </h1>");
document.write("<br>");

var totalSub1 = prompt("Enter total marks of subject 1");
var totalSub2 = prompt("Enter total marks of subject 2");
var totalSub3 = prompt("Enter total marks of subject 3");

var obtainedSub1 = prompt("Enter Subject 1 Marks");
var obtainedSub2 = prompt("Enter Subject 2 Marks");
var obtainedSub3 = prompt("Enter Subject 3 Marks");

var percentSub1 = (obtainedSub1 / totalSub1) * 100;
var percentSub2 = (obtainedSub2 / totalSub2) * 100;
var percentSub3 = (obtainedSub3 / totalSub3) * 100;

var totalMarks = parseInt(totalSub1) + parseInt(totalSub2) + parseInt(totalSub3);
document.write("Total Marks : " + totalMarks);

document.write("<br>");
var obtainedTotal = parseInt(obtainedSub1) + parseInt(obtainedSub2) + parseInt(obtainedSub3);
document.write("Marks obtained : " + obtainedTotal);

document.write("<br>");
var totalPercentage = percentSub1 + percentSub2 + percentSub3;
document.write("Percentage : " + totalPercentage + "%");

if(totalPercentage >= 80){
    document.write("<br>");
    document.write("Grade : A-one");
    document.write("<br>");
    document.write("Remarks : Excellent");
}
else if(totalPercentage >= 70){
    document.write("<br>");
    document.write("Grade : A");
    document.write("<br>");
    document.write("Remarks : Good");
}
else if(totalPercentage >= 60){
    document.write("<br>");
    document.write("Grade : B");
    document.write("<br>");
    document.write("Remarks : You need to improve");
}
else if(totalPercentage < 60){
    document.write("<br>");
    document.write("Grade : Fail");
    document.write("<br>");
    document.write("Remarks : Sorry");
}
    

// // 7. Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable.
// // Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct answer”.
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.


var a = 5;
var b = a + 1;

var check = prompt("Enter Number ");
check = parseInt(check);

if(check === a){
    document.write("Bingo! Correct answer");
}
if(check === b){
    document.write("Close enough to the correct answer");
}

// // 8. Write a program to check whether the given number is
// // divisible by 3. Show the message to the user if the number
// // is divisible by 3.

var num = prompt("Enter Number");

if(num%3 == 0){
    document.write("Divisible by 3");
}
if(num%3 != 0){
    document.write("Not divisible by 3");
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = prompt("Enter Number");

if(num%2 == 0){
    document.write("Even Number");
}
if(num%2 != 0){
    document.write("Odd Number")
}



// // 10. Write a program that takes temperature as input and
// // shows a message based on following criteria
// // a. T > 40 then “It is too hot outside.”
// // b. T > 30 then “The Weather today is Normal.”
// // c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt("What is the temperature?");

if(temp > 40){
    document.write("It is too hot outside.");
}
else if(temp > 30){
    document.write("The Weather today is Normal.");
}
else if(temp > 20){
    document.write("Today’s Weather is cool.");
}
else if(temp > 10){
    document.write("OMG! Today’s weather is so Cool.");
}