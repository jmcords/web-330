/*
============================================
; Title:  Exercise-3.3.js
; Author: Professor Krasso
; Date:   12 MAY 2020
; Modified by: Jason Cords
; Description: Using the singleton pattern.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 3.2"),"\n"); //header

var DatabaseSingleton = (function() {

  var instance; //initialize instance

  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!"); //creating new singleton object
    
    return postgresDatabase; 
  }
  return {
    getInstance: function() { //creating a new instance if one is not create
      if (!instance) {
        instance = createInstance();
      }
    return instance;
    }
  }
 })();

 function databaseSingletonTest() {
  var Instance1 = DatabaseSingleton.getInstance();
  var Instance2 = DatabaseSingleton.getInstance();
    console.log("Same database instance? " + (Instance1 === Instance2)); //logs whether instances are the same
 }
 
 databaseSingletonTest();