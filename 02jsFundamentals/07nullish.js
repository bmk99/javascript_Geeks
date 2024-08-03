
// Nullish Coalescing Operator (??)


const a = 20 
const b = null 
const b1 = undefined 

console.log(a ?? "yes it null or undefined")
console.log(b ?? `yes it ${b}`)
console.log(b1 ?? `yes it ${b1}` )


// Conditional (Ternary) Operator
    // The ?? operator returns the first argument if it is not nullish (null or undefined).



const c = 30

console.log(c > 20? "c is greater than 20" : "c is less than 20")


// The Optional Chaining Operator (?.)
    // The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

const d = {name: "foo", value:45}

let city = d.city

console.log(city)
console.log(d.city)  // throws if the city is not provided while using in the html 
console.log(d?.city) // it return undefined if the city is not provided 


const myArray = [1, 2, 3];

// Without optional chaining:
const value = myArray[10]; // If index 10 does not exist, it will return undefined.
console.log(value)

// With optional chaining:
const valueSafe = myArray?.[10]; // If index 10 does not exist, valueSafe will be undefined.








