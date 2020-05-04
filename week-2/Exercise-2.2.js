/*
============================================
; Title:  Exercise-2.2.js
; Author: Professor Krasso
; Date:   5 MAY 2020
; Modified by: Jason Cords
; Description: Using prototypes.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 2.2"),"\n"); //header

var Person = { //object literal with getAge function that returns age
  getAge: function(){
    return this.age;
  }
};

//creating new object with passed function
var aPerson = Object.create(Person, {
  "age":{
    "value": "30"
  },
  "fullname":{
    "value": "Jason Cords"
  }
});
//logging results with aPerson object and getAge object
console.log("The person's full name is " + aPerson.fullname);
console.log("The person's age is " + aPerson.getAge());