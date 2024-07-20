// rest parameter ...
// ...rest
// remaining all converted into the array ..
// rest will convert into the array ..
// comn

function call(a, b, c, ...rest) {
  console.log(a, b, c);
  console.log(rest);
}
call(1, 2, 24, 5, 43, 6, 3, 6, 46, 32, 2, 1);
console.log(`-------
  `)
const [a, b, ...others] = ["kiran", "ha", "one", "two", "no"];
console.log(a);
console.log(b);
console.log(others);


console.log(`
    ---------`);
//  spread operator will spread the units
// expand iterables into on e

function call2(a,...b) {
  console.log(a);
  console.log(b);
  // console.log(arr)
}
const arr = ["kiran", "ha"];

call2(...arr); // sp

const array1 = [1,2,3,4,5,6]
const array2 = [...array1,7,8,9] // spreading the array

console.log(array1)
console.log(array2)

const s ="die"
const k = {...s}
const ra = [...s]
console.log(k)
console.log(ra)
