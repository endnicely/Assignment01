/*eslint-env browser*/
// STEP 1
/*
var someMonth;
function theMonth 		// function to return current month 
currentMonth 		// a constant
var summerMonth; 		// an array of summer months
myLibraryAFunction 	// a function 
*/

// STEP 2
/*
2018.216				// numeric literal expression
"Hello World!" 			// string literal expression
false 				// Boolean literal expression
null 				// literal null value expression
*/

// STEP 3
/*
var VariableExpression1 = 3 * (4 / 8) + 2018;
var VariableExpression2 = Math.PI * VariableExpression1;
*/

// STEP 4
//var firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou;

// STEP 5
/*
//first method of declaring and assigning values to variables.
var firstName;
var lastName;
var address;
var city;
var state;
var zipCode;
var yourAge;
var referralSource;
var mayWeContactYou;
firstName = "Joy";
lastName = "Zhou";
address = "5555 overland Ave";
city = "San Diego";
state = "CA";
zipCode = "92111";
yourAge = 100;
referralSource = "Buddha";

mayWeContactYou = true;

//second method of declaring and assigning values to variables.
var firstName = "Joy";
var lastName = "Zhou";
var address = "5555 overland Ave";
var city = "San Diego";
var state = "CA";
var zipCode = "92111";
var yourAge = 100;
var referralSource = "Buddha";
var mayWeContactYou = true;

//third method of declaring and assigning values to variables.
var firstName = "Joy", lastName = "Zhou", address = "5555 overland Ave", city = "San Diego", state = "CA", zipCode = "92111", yourAge = 100, referralSource = "Buddha", mayWeContactYou = true;
*/

// STEP 6
/*
var springFestival = "Spring Festival " + 2018;
window.console.log(springFestival);

var dogyear = true + " dog year!";
window.console.log(dogyear);

var numberBoolean = 2018 + true;
window.console.log(numberBoolean);
*/

// STEP 7
/*
//Hoisting is Javascript's default behavior of moving all declarations to the top of the current script or function. This means
//that a variable can be declared after it has been assigned a value.
name = "Joy Zhou";
var name;
window.console.log(name);

window.console.log("My Name is " + myName);
var myName = "Joy Zhou";
*/

// STEP 8
/*
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
window.console.log(someString);
The above is not a valid string literal. It is missing the escape sequence for ', the following is the correction

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);
*/

// STEP 9
/*
var x = null;
var y;
window.console.log(x);             //null
window.console.log(y);             //undefined
*/

// STEP 10
/*
window.console.log(typeof "John");                         //string
window.console.log(typeof NaN);                            //number
window.console.log(typeof false);                          //boolean
window.console.log(typeof {name:'Zak', age:18});            //object                 
var y;
window.console.log(y);               
*/

// STEP 11
//window.alert("Hello " +  "Joy Zhou" + ", welcome to the JavaScript class!");

// STEP 12
/*
var name = "Joy Zhou";
window.alert("Hello " +  name + ", welcome to the JavaScript class!");
*/

// STEP 13
/*
var name = "Joy Zhou";
var course = "JavaScript";
window.alert("Hello " +  name + ", welcome to the " +  course + " class!");
*/

// STEP 14
/*
var name = "Joy Zhou";
var course = "JavaScript";
window.alert("Hello " +  name + ".\n Welcome to the " +  course + " class!");
*/

// STEP 15
/*
var name = window.prompt("Please provide your name:");
var course = "JavaScript";
window.alert("Hello " +  name + ", welcome to the " +  course + " class!");
*/

// STEP 16
/*
var name = window.prompt("Please provide your name:");
var course =  window.prompt("Please provide the course you'd like to take:");
window.alert("Hello " +  name + ", welcome to the " +  course + " class!");
*/

//STEP 17
/*
var x = 10;
var y = 20;
window.console.log(x+y);
*/

//STEP 18
/*
var x = 20;
x += 20;
window.console.log(x);
*/

//STEP 19
/*
var x = 20;
x *= 5;
window.console.log(x);
*/

//STEP 20
/*
var x = 20 % 3;
x /= 1;
window.console.log(x);
*/

//STEP 21
/*
var x = 6;
var y = 10;
window.console.log(x == 6 && y == 10);
*/


//STEP 22
/*
var x = 15;
var y = 10;
window.console.log(x <= y != false);
*/

//STEP 23
/*
var widget = new Object();
window.console.log(typeof widget);
*/

//STEP 24
/*
var widget = new Object();
window.console.log(widget instanceof Object);
*/

//STEP 25
/*
var widget = new Object();
window.console.log(widget instanceof Number);
*/

