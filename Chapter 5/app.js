// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " " + "and" + " " + b + " is " + c);


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var a = 3;
var b = 5;
var c = a - b;
document.write(a + " minus " + b + " = " + c);

var a = 3;
var b = 5;
var c = a * b;
document.write(a + " multiply by " + b + " = " + c);

var a = 15;
var b = 5;
var c = a / b;
document.write(a + " divided by " + b + " = " + c);

var a = 200;
var b = 150;
var c = a % b;
document.write(a + " % " + b + " = " + c);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var num = "Value after variable declaration is: ??";
document.write(num);

document.write("<br>");
num = 5;
document.write("Inital value: " + num);

document.write("<br>");
num++;
document.write("Value after increment is: " + num);

document.write("<br>"); 
var num2 = 7;
var add = num + num2;
document.write("Value after addition is: " + add);

document.write("<br>"); 
add--;
document.write("Value after decrement is: " + add);

document.write("<br>"); 
var num3 = 3;
var remainder = add / num3;
document.write("The remainder is: " + remainder);


//4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

var ticketCost = 600;
var persons = 5;
var totalCost = ticketCost * persons;
document.write("Total cost to buy " + persons + " " + "tickets to a movie is " + totalCost + "PKR");


// 5. Write a script to display multiplication table of any number in your browser.

document.write("Table of 4");
document.write("<br>");
document.write("4x1=4");
document.write("<br>");
document.write("4x2=8");
document.write("<br>");
document.write("4x3=12");
document.write("<br>");
document.write("4x4=16");
document.write("<br>");
document.write("4x5=20");
document.write("<br>");
document.write("4x6=24");
document.write("<br>");
document.write("4x7=28");
document.write("<br>");
document.write("4x8=32");
document.write("<br>");
document.write("4x9=36")
document.write("<br>");
document.write("4x10=40");


// 7. Write a program to implement checkout process of a shopping cart
// system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var cart = "<h1>Shopping Cart</h1>";
document.write(cart);

var item1 = 650;
document.write("Price of item 1 is " + item1);

document.write("<br>");
var quantity = 3;
document.write("Quantity of item 1 is " + quantity);

document.write("<br>");
var item2 = 100;
document.write("Price of item 2 is " + item2);

document.write("<br>");
var quantity2 = 7;
document.write("Quantity of item 2 is " + quantity2);

document.write("<br>");
var charges = 100;
document.write("Shipping charges " + charges);

document.write("<br>");
document.write("<br>");
var totalItem1 = item1 * quantity;
var totalItem2 = item2 * quantity2;
var total = totalItem1 + totalItem2 + charges;
document.write("Total cost of your order is " + total);


// // 8. Store total marks & marks obtained by a student in 2 variables. 
// // Compute the percentage & show the result in your browser

var totalMarks = 980;
document.write("Total marks: " + totalMarks);
document.write("<br>");
var obtainedMarks = 804;
document.write("Marks obtained: " + obtainedMarks);
document.write("<br>");
var percent = (obtainedMarks / totalMarks) * 100;
document.write("Percentage: " + percent + "%");


// // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// // script to convert the total currency to Pakistani Rupees.
// // Perform all calculations in a single expression.
// // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// // and 1 Saudi Riyal = 28 Pakistani Rupee)

var currency = "<h1> Currency in PKR </h1>";
document.write(currency);

var usd = 10;
var pakRupee = 104.80;
var convert = usd * pakRupee;

var riyal = 25;
var pakRupee = 28;
var convert2 = riyal * pakRupee;   

var totalCurrency = convert + convert2;
document.write("Total currency in PKR: " + totalCurrency);


// // 10. Write a program to initialize a variable with some
// // number and do arithmetic in following sequence:
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// // Perform all calculations in a single expression


var a = 5;
var b = 5;
var add = a + b;

var c = 10;
var multiply = c * add;

var d = 2;
var divide = multiply / d;

document.write(divide);


// // 11. The Age Calculator: Forgot how old someone is? Calculate it!
// // a. Store the current year in a variable.
// // b. Store their birth year in a variable.
// // c. Calculate their 2 possible ages based on the stored values.
// // Output them to the screen like so: “They are either NN or NN years old”.

var calculator = "<h1> Age Calculator </h1>";
document.write(calculator);

var now = new Date();
var currentYear = now.getFullYear();
document.write("Current year: " + currentYear);

document.write("<br>");
var birthYear = 2001;
document.write("Birth Year: " + birthYear);

document.write("<br>");
var age = currentYear - birthYear;
document.write("Your Age is: " + age);






