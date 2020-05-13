/*
============================================
; Title:  Exercise-3.2.js
; Author: Professor Krasso
; Date:   12 MAY 2020
; Modified by: Jason Cords
; Description: Using the factory pattern.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 3.2"),"\n"); //header

function Oracle(properties) { //constructor that takes 1 argument and has 4 properties
  this.username = properties.username || "user";
  this.password = properties.password || "admin";
  this.server = properties.server || "mediafire"; 
  this.version = properties.version || "1.1.2.432.01";
}

function Informix(properties) { //constructor that takes 1 argument and has 3 properties
  this.username = properties.username || "user";
  this.password = properties.password || "admin";
  this.server = properties.server || "localhost:8080";
}

function DatabaseFactory() {} //creates function to be updated below

DatabaseFactory.prototype.databaseClass; //creates prototype property for function
DatabaseFactory.prototype.createDatabase = function(properties) {
  //if else statement to determine database type
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else {
    this.databaseClass = Informix;
  }

    return new this.databaseClass(properties);
};
//creates instance of DatabaseFactory
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "N00btuberxXxX",
    password: "12345"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "thepasswordispassword",
    password: "password"
});

console.table(oracle);
console.table(informix);