/*
============================================
; Title:  Exercise-1.4.js
; Author: Professor Krasso
; Date:   26 Apr 2020
; Modified by: Jason Cords
; Description: Duck typing.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 1.4"),"\n"); //header

function Car(model){ //Car constructor with 1 passed value
    this.model = model
}
Car.prototype.start = function(){ //adding to the constructor
    console.log("Car added to the racetrack!");
}

function Truck(model, year){ //Truck constructor with 2 passed values
    this.model = model
    this.year = year
}
Truck.prototype.start = function(){ //adding to the constructor
    console.log("Truck added to the racetrack!");
}

function Jeep(model, year, color){ //Jeep constructor with 3 passed values
    this.model = model
    this.year = year
    this.color = color
}
Jeep.prototype.start = function(){ //adding to the constructor
    console.log("Jeep added to the racetrack!");
}

var racetrack = []; //unpopulated array

function driveIt(vehicle){ //called function to call prototype and add to array
    vehicle.start();
    racetrack.push(vehicle);
}

var car = new Car("Sonic");
var truck = new Truck("Colorado", "2017");
var jeep = new Jeep("Wrangler", "2010", "Blue");

driveIt(car);  //calls function with each variable
driveIt(truck);
driveIt(jeep);

console.log("\n-- The following vehicles have been added to the racetrack --")
for (var i = 0; i < racetrack.length; i++) {  //iterates through array and logs results
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
   }