/*
============================================
; Title:  Exercise-1.3.js
; Author: Professor Krasso
; Date:   26 Apr 2020
; Modified by: Jason Cords
; Description: Class refresher.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 1.3"),"\n"); //header

function cellPhone(man, mod, col, pri){  // creating function with 4 passed values
    this.Manufacturer = man
    this.Model = mod
    this.Color = col
    this.Price = pri

    this.getPrice = function(){ //getPrice function returning price
        return this.Price
    }

    this.getModel = function(){ //getModel function returning model
        return this.Model
    }

    this.getDetails = function(){ //getDetails function to create string of values to return
        return "Manufacturer: " + this.Manufacturer + "\nModel: " + 
        this.getModel() + "\nColor: " + this.Color + "\nPrice: " +
        this.getPrice();
    }
}

var phone = new cellPhone("Samsung", "Galaxy S20", "Grey", "1199.99");
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(phone.getDetails());