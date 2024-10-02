// Object.freeze(obj) - to avoid mutation like we cam't modify..even though we try to add new properties,or tried to modify the existing properties... nothign wil change the orginal one

const obj1 = {
  name: "krian",
  age: 24,
};
console.log({obj1})
Object.freeze(obj1);

obj1.review = "bad";
obj1.newProp = "new prop";
obj1.name = "sanam";

console.log({ obj1 });

console.log("-------------------------------");

// -------------------------------------------

// Object.seal(obj) // we can't add the new properties but we can modify the existing properties.

const obj3 = {
  name: "krian",
  age: 24,
};

console.log({ obj3 });
Object.seal(obj3);
obj3.city = "hyderabad"; // can't add
obj3.name = "k";

console.log({ obj3 });

console.log("-------------------------------");

// --------------------------------------------
// Object.values(obj)
// Object.keys(obj)
// Object.entries(obj)

const obj7 = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj7));

console.log(Object.keys(obj7));

console.log(Object.entries(obj7));

// --------------------------------------------

// obj.hasOwnProperty(property) // to check whether property present in or not .



const obj8 = { a: 1, b: 2, c: 3 };

console.log({obj8})
console.log(obj8.hasOwnProperty()) 
console.log(obj8.hasOwnProperty('d'))
console.log(obj8.hasOwnProperty("c"))
console.log(obj8.hasOwnProperty("a"))
// -----------------------------------------------

const obj = { a: 1, b: 2, c: 3 };
const res = Object.entries(obj)  // object converted into the array with each element haveing property and value in string format
console.log(res)

const returnToObj = Object.fromEntries(res) // revert back from arrays to object... we any array like that ,, if not  in the format [property, values]

console.log(returnToObj)


const filteredObj = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 1)
);

console.log(filteredObj); // { b: 2, c: 3 }

// 
const obj10 = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ] // we can do manually 
console.log(Object.fromEntries(obj10))