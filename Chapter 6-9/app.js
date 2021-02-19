// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser

document.write("<h1> Result: </h1>");

var a = 10;
document.write("The value of a is: " + a);

document.write("<br>");

document.write("........................................... ");

document.write("<br>");
document.write("<br>");

a++;

document.write("The value of ++a is: " + a);

document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

document.write("The value of ++a is: " + a);

a++;
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

a--;
document.write("The value of --a is: " + a);
document.write("<br>");
document.write("Now the value of a is " + a);

document.write("<br>");
document.write("<br>");

document.write("The value of --a is: " + a);

document.write("<br>");
a--;
document.write("Now the value of a is: " + a);


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a = 2;
var b = 1;

var result = --a - --b + ++b + b--;

var res1 = --a; //1
var res2 = --a - --b; //0
var res3 = --a - --b + ++b; //-1
var res4 = --a - --b + ++b + b--; //-3

document.write("<br><br>The Output of --a - --b + ++b + b-- " + result);

document.write("<br> The Output of --a is " + res1);

document.write("<br> The Output of --a - --b is " + res2);

document.write("<br> The Output of --a - --b + ++b is " + res3);

document.write("<br> The Output of --a - --b + ++b + b-- is " + res4);




// 3. Write a program that takes input a name from user & greet the user.

var $name = prompt("Enter Your Name");
document.write("Hello " + $name + " Nice to meet you!");



// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var subName1 = prompt("Enter Subject Name");
var totalMarks = 100;
var marksSub1 = prompt("Enter Your Marks");
var percent1 = (marksSub1 / totalMarks) * 100;

var subName2 = prompt("Enter Subject Name");
var totalMarks = 100;
var marksSub2 = prompt("Enter Your Marks");
var percent2 = (marksSub2 / totalMarks) * 100;

var subName3 = prompt("Enter Subject Name");
var totalMarks = 100;
var marksSub3 = prompt("Enter Your Marks");
var percent3 = (marksSub3 / totalMarks) * 100;


var resultTotal  = totalMarks * 3;
var resultObtained = parseInt(marksSub1) + parseInt(marksSub2) + parseInt(marksSub3);
var resultPercent = percent1 + percent2 + percent3;


document.write("<table>");
    document.write("<tr>");
        document.write("<th> Subject </th>");
        document.write("<th> Total Marks </th>");
        document.write("<th> Obtained Marks </th>");
        document.write("<th> Percentage </th>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>" + subName1 + "</td>");
        document.write("<td>" + totalMarks + "</td>");
        document.write("<td>" + marksSub1 + "</td>");
        document.write("<td>" + percent1 + "</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>" + subName2 + "</td>");
        document.write("<td>" + totalMarks + "</td>");
        document.write("<td>" + marksSub2 + "</td>");
        document.write("<td>" + percent2 + "</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>" + subName3 + "</td>");
        document.write("<td>" + totalMarks + "</td>");
        document.write("<td>" + marksSub3 + "</td>");
        document.write("<td>" + percent3 + "</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<th></th>");
        document.write("<th>" + resultTotal +  "</th>");
        document.write("<th>" + resultObtained + "</th>");
        document.write("<th>" + resultPercent + "%" + "</th>");
    document.write("</tr>");


document.write("</table>");