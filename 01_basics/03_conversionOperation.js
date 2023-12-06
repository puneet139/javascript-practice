//Primitive
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoogedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id===anotherId) //false

const bigNumber = 324241241241241451

// Reference type or non primitive
// Array, Objects, Functions

var heroes = ["shaktimaan", "nagraj"]

console.log(typeof heroes) // object

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myFunction) //function