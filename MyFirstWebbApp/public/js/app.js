 

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS

    //1. document.createElement
    //2. element.appendChild
function addLastName(){


    var lastNameElem = document.createElement('span');

    var lastNameText = 
    document.createTextNode('Kirkoski');
lastNameElem.id = 'myLastName';
lastNameElem.appendChild(lastNameText);
var myNameElem = document.getElementById('myName');
console.log('last name added');

  
}
window.onload=addLastName;