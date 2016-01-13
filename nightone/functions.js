// Declare 2 variables
var a = 8;
var b = 4;
var c = 2;
//Function-add
function  add(a, b){
return a+b;
}
 var sum = add(a, b);
console.log(sum);
//function-subtract
function subtract(a, b){
	return a-b;
}
var difference = subtract(a, b);
console.log(difference);
//function - multiply
function multiply(a, b){
	return a*b;
}
var product = multiply(a, b);
console.log(product);
//function - checkDifference
function checkDifference(){
	return "My football team lost " + difference + " times this week.";
}
console.log(checkDifference());
//function checkSum
function checkSum(){
	return "I CAN ADDZ " + sum+" NUMBERS.";
}
console.log(checkSum());
//function checkProduct
function multiply(product, difference){
	return product*difference;
}
var checkProduct = multiply(product, difference);
console.log(checkProduct);
//function-addThenSubtract
function  addThenSubtract(a, b, c){
	return a+b-c;
}
	var ats = addThenSubtract(a, b, c);
console.log(ats);
//function addThenMultiply
function addThenMultiply(a, b, c){
	return a+b*c;
}
var howMany= addThenMultiply(a, b, c);
console.log(howMany);
//function createFullName
function createFullName(firstName, lastName){
	return firstName +" " + lastName;
}
var myFullName = createFullName("Sandy", "Kirkoski");
console.log(myFullName);
//function verifyDrinkingAge
function verifyDrinkingAge(age){
	return age >= 21;
}
var canDrinkBeer = verifyDrinkingAge(22);
console.log(canDrinkBeer);
//function throwParty
function throwParty(age){
	if (age <21){
		console.log("The party will have tons of cake.");
	} else {
	console.log("The party will have an open bar.");
  }
}
//function eatFood
function eatFood(firstName, lastName, food){
	return myFullName +" "+ "loves to eat " + food;
}
var eats = eatFood("firstName", "lastName", "pizza");
console.log(eats);