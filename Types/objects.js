"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this function is expecting an object that has a "first" property, which is set to a type string
function printName(person) { }
// printName({ first: "Holly", last: "Orr", age: 19 }) - Error: won't allow key/values not already specified
var person = { first: "Holly", last: "Orr", age: 19 };
printName(person); // no error
// outlines what shape/structure the coordintate variable should look like
var coordinate = { x: 34, y: 2 };
// defines the type of object that should be returned 
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
//variable of type: Pet
var myCat = { name: "Brundi", weight: 3 };
//function takes in a object of type Pet and returns an object of type Pet
function increaseWeight(pet) {
    return { name: pet.name, weight: pet.weight++ };
}
var otherCat = { name: "Ben", weight: 5, isFat: true };
increaseWeight(otherCat);
console.log(otherCat);