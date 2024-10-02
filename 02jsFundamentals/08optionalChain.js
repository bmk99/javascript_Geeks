// The Optional Chaining Operator (?.)
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

// to check
const d = { name: "foo", value: 45 };
let city = d.city;
console.log(city);
console.log(d.city); //  throws if the city is not provided while using in the html

//  -by using the nullish
console.log(d?.city); // it return undefined if the city is not provided

const myArray = [1, 2, 3];

// Without optional chaining:
const value = myArray[10]; // If index 10 does not exist, it will return undefined.
console.log(value);

// With optional chaining:
const valueSafe = myArray?.[10]; // If index 10 does not exist, valueSafe will be undefined.

//  you can see more usage in -> 06Objects 