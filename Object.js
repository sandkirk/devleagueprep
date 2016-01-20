//Plain Object and adding properties//Declare a variable named plainBox and set its value to be an empty object.
//
//Next, you will add three properties to this object. Each property declaration expression will be on its own line and ending with semicolons (;). This is just one way of adding properties to an object.

//Add a property named color and set it the name of any color.
//Add a property named size and set it to a number value between 0 and 20.
//Add a property named contents and set it to be an empty array.

/*    {
        color: "red",
        size: 11,
        contents: null
    };
// or this way by declaring creating empty object first then 
    var pBox = {
    };
    pbox.color = "red";*/

 //An object with properties declared line by line
 //Declare a variable named stockCar and set its value to be an object with its key-value pairs separated by commas (,). This is a way of declaring a new object and also being able to add property names and values at the moment an object is created.

//add a key named model and set its value to the name of an American car manufacturer.
//add a key named year and set it to be a value above 2000 but below 2016.
//add a key named automaticTransmission and give it a Boolean value of your choice.
//add a key named passengers and set it to be an empty array.

/*{
	model: Ford,
	year: 2011,
	automaticTransmission: 'true',
 	driver: null,
 	passengers: []

};
console.log(stockCar);*/

//Add new property inside a function
/*Declare a variable named plainPerson. Set its value to be an empty object with no properties.

Next, declare a function named buildPerson and then define three parameters. The first parameter will be named person and the second will be nameString and the third will be age. Within this function you will modify the person object by:

adding a property called name and set its value to be the second parameter.
adding a property called age and set its value to be the third parameter.

The function will return the first parameter.

Finally, invoke your new function while passing in the plainPerson object and additional agrument values, then store the return value. Use console.log three times to print the entire object, just the value at name, and just the value at age.*/

var plainPerson = {};
function buildPerson (person, nameString, age)
{
person.name = nameString; 
person.age = age;
return person;
}
var newPerson = buildPerson(plainPerson, 'Jed', 12);
console.log(newPerson);
console.log(newPerson.name);
console.log(newPerson.age);

//Display values of objects that are inside an array
//
//Declare a new function named printProcessedOrdersand set one parameter called orders. Within this function you will use console.log to print order details to the page.

//Example output:

//=====
//id:  0
//purchase date:  Monday Jan 25 2015 2:01 PM
//purchase total:  279.38
//=====
/*id:  1
purchase date:  Monday Jan 27 2015 11:31 AM
purchase total:  79.80
=====
id:  2
purchase date:  Monday Feb 1 2015 7:56 AM
purchase total:  15.628*/

var arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
]


function printProcessedOrders(orders)
 {
 	for (var i = 0; i < orders.length; i++) 
 	{
var order = orders[i];
console.log("====");
console.log("id: " + order.id);
console.log("purchase date: " + order.date);
console.log("purchase total: " + order.total);
 	}
}
printProcessedOrders(arrayOfObjects);

//Addition with an object
//Declare a new variable and set it to be a new object with the properties a, b, and result.

//Declare a new function. Declare the first parameter, which will be an object. Within this function, you will access the values stored a and b of the object being passed in. Add the these values and store the sum to this object's result property. This function will return the object.

//Invoke your function and pass in your object, store the result to a variable and use console.log to inspect your results.

//Go ahead and create some more objects and pass them to this function. Have fun with it.

var car = {
a: "red",
b: "yellow",
result: null
};

function carAccess(color){
	color.result = (color.a + color.b);
	return color;
}

var carColor = carAccess(car);
console.log(carColor);

//or this way

var car = {
a: 5,
b: 4,
result: 0
};

function carAccess(color){
	color.result = (color.a + color.b);
	return color;
}

var carColor = carAccess(car);
console.log(carColor);

//Print sum function and add as new key-value
//Declare a new function and a single parameter which will be the object from the challenge just above. Within this function you are to print to the screen a message of the operation performed. For Example:

// if this object was passed into your function: { a: 10, b:67, result: 77 }
// it should print a message saying
//'10 + 67 = 77'
//Before returning this object, add a new property to it named output and set it to be the message that was printed out.

funtion additFunction(color){
	console.log("\"  + color.a + "+" + color.b + "="  color.result)
}
