// this function is expecting an object that has a "first" property, which is set to a type string
function printName(person: { first: string, last: string }) {}

// printName({ first: "Holly", last: "Orr", age: 19 }) - Error: won't allow key/values not already specified
const person = { first: "Holly", last: "Orr", age: 19}
printName(person) // no error

// outlines what shape/structure the coordintate variable should look like
let coordinate: { x: number, y: number } = { x: 34, y: 2 }

// defines the type of object that should be returned 
function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}

// TYPE ALIASES
type Pet = {
    readonly name: string; //property can be initialised but not chnaged 
    weight: number;
    topSpeed?: number; //optional property
}

//variable of type: Pet
let myCat: Pet = { name: "Brundi", weight: 3 }

//function takes in a object of type Pet and returns an object of type Pet
function increaseWeight(pet: Pet): Pet {
    return { name: pet.name, weight: pet.weight++ }
}

let otherCat = { name: "Ben", weight: 5, isFat: true }

increaseWeight(otherCat)
console.log(otherCat);

//INTERSECTION TYPES
type Animal = { species: string, endangered: boolean }

//ExoticPet is an intersection of type Pet and Animal and an extra property: eyeColor
type ExoticPet = Pet & Animal & { eyeColor: string }

const myLion: ExoticPet = {
    name: "Leo",
    weight: 160,
    species: "Big Cat",
    endangered: false,
    eyeColor: "blue"
}

export {}