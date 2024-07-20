// // Arthemetic operators 
let p =2 
let q = 3

let x = "2"
let y = "3"

let a = "grapes"
let b = "orange"


console.log('--addition--')
console.log(p + q)
// p and q  are called as the operands  ----
// + is-> in the middle are operators 

console.log(x + y)
// we are using `+` as -> addition and concataion purpose so x and y ara strings it will combine instead of adding 
// but incase of other operators if a number is present is either string or number it will calculate based on the given operator

console.log(a + b)
console.log("---subtraction---")
console.log(p - q)
console.log(x - y)
console.log(a - b)
console.log("--multiplication---")
console.log(p * q)
console.log(x * y)
console.log(a * b)
console.log("--division---")
console.log(p / q)
console.log(x / y)
console.log(a / b)
console.log("--moduous---")
console.log(p % q)
console.log(x % y)
console.log(a % b)
console.log("---exponential power---")
console.log(p ** 3)
console.log(x ** 3)
console.log(a ** 3)
console.log(a ** b)

// for the a and b values when try to use operators it shows NaN(not a integer)

console.log('---post and pre Increment----')
let s = 9
console.log(s)
console.log(++s, s, ++s) // preincrement -first increment and update done at the same time
console.log(s++,s, s++) // postincrement -after print then increment

console.log("---post and pre decrement-----")
let k = 20
console.log(k)
console.log(--k,k,--k) // pre decrement 
console.log(k--,k,k--)  // post decrement
