//Assessing values in an array
//Declare a variable named presidents which contains the first 5 presidents' last names: Washington, Adams, Jefferson, Madison, Monroe.
//Now write a FOR loop which iterates through this Array.
//Within the FOR loop, use console.log to:
//Log the value of i. Use a message like Value of i is: and append the value of i to this String
//Log what is at index i in the array. Use a message like Value at Index is: and append the value stored within the Array at that index.
//console.log is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use console.log to inspect and debug your code

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"] {
	for (var i = 0; i < presidents.length; i++;){
	console.log("Value of i is: "" + i); //same as console.log(", i") 
	console.log("Value at Index is: " + presidents[i]);
	}
}

//bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called printContent and still achieve the same result? This new function should accept two parameters.var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"] {
	var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"] {
		function printContent(i) {

	console.log("Value of i is: " + i); //same as console.log(", i") 
	console.log("Value at Index is: " + presidents[i];
	}
		}
	function printContent(i) {	
	for (var i = 0; i < presidents.length; i++;){
	console.log("Value of i is: " + i); //same as console.log(", i") 
	console.log("Value at Index is: " + presidents[i];
	}

//Declare a variable named stringOfNumbers and set it's value to '' (an empty String).
//
//Then write a FOR loop that appends a Number value to that string starting from 10 all the way up to and including 20.

//After the FOR loop, use console.log to inspect your variable. In the end your String should look like this 1011121314151617181920

//bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called appendToStr
//ing and still achieve the same result?

var stringOfNumbers = "";
for (var i = 10; i <= 20; ++i){
	stringOfNumbers +=i; //stringOfNumber + i is the same	
}
console.log(stringOfNumbers);

//bonus
function appendToString(stringToAppendTo, stringToAppend) {
	return stringToAppendTo + stringToAppend;
}
function createStringOfNumbers()
var stringOfNumbers = "";
for (var i = 10; i <= 20; ++i){
	stringOfNumbers +=i; //stringOfNumber + i is the same	
}
console.log(stringOfNumbers());//to call string of numbers needs ()

//var a = 4

//Declare a variable named evenNumberArray.
//Use a FOR loop to add only even numbers to an Array. Add 50 even numbers to the evenNumberArray starting with the value 0.

var evenNumberArray = [];
for (var j = 0;  j< 99; j+=2){ //j = j + 2
	//if (j % 2 === 0){

	//}
evenNumberArray.push(j);
}
console.log(evenNumberArray);

//Someone forgot to fill out this array! Oh noes...

//Declare a new variable named oopsArray set it's value to be: [ 'turn' , , 'down' , , 'for' , , 'what' ]
//using a FOR loop, add the string 'nope' to every odd index.

//Example result should look like:

//`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`//

var oopsArray = [ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ];
console.log('oopsArray' oopsArray.length, oopsArray);
for (var k = 0; k < oopsArray; k = +)

