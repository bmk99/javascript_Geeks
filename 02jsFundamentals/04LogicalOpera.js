//  Logical operators..........
//  || _OR -> if atleast one condition is true
//  && _AND -> all condtions must be true i.e if one condition is false it wouldn't return anything
//  ! _NOT  -> works for only the boolean values .. it reverse the boolean values
//  ??_ NULLISH OPERATOR ->

// Before Going in to the Logical operators we need to go through some values of the Boolean .. 
// all Logical operators depend on either the values are false or true,  when log with the this -` Boolean(value)` 

console.log(`Boolean of 0`,Boolean(0))
console.log(`Boolean of undefined`,Boolean(undefined))
console.log(`Boolean of null`,Boolean(null))
console.log(`Boolean of empty string`,Boolean(""))
console.log(`Boolean of number`,Boolean(9))
console.log(`Boolean of string`,Boolean("haa"))
console.log(`Boolean of any acii value`,Boolean(" "))
console.log(`Boolean of any false`,Boolean(false))
console.log(`Boolean of any true`,Boolean(true))

// __________________________________________________
// -- && _AND_ operator-----------

// change the values and see the changes.........
let age = 98;
let bp = 110;
let o2 = 90;

if (age > 21 && age < 60 && bp > 110 && o2 > 90) {
  console.log("Trecking--you are allwoed for trecking");
} else {
  console.log("Trecking--STOP go back you are not allowed for trecking ");
}
// _______________________________________
// -------------|| _OR_  operator ----------------

//  change the below values either true or false and see the resutl
let passport = true;
let aadhar = false;
let driving = true;

// among all the values if any value is true then it will stop checking the other values
if (passport == true || aadhar == true || driving == true) {
  console.log("Exam--GO and write the exam ");
} else {
  console.log(
    "Exam ---Stop  GO back and brign any of the aadhar,driving,aadhar etc"
  );
}
// _______________________________________

// ---------- ! NOT OPERATOR-----------

//  oppsite the boolean value if value is true then it shows false .. vice versa.......
let eligible = true;

if (!eligible) {
  console.log("you are not eligible ");
} else {
  console.log("you are eligible .");
}

// _______________________________________

// ---------  ?? NULLISH OPERATOR-----------
//  it only works when some value is undefined or null otherwise it will log the other value

let car = "tata"
let bike = undefined
let suv = null
let rating = 0

console.log(car ?? "car name is not mentioned")
console.log(bike ?? "bike--- name is not mentioned ")
console.log(suv ?? "suv---- name not mentioned.")

console.log(rating ||  "by using or --rating not revieled yet wait for some time") // here if we use _OR_ operator ,so boolean of _0_ is false so  it will print the message 
console.log(rating ?? "price not revieled yet wait for some time") // here if we are not using _OR_ operator becaz it will print the message, so to avoid in this cases we use nullish





// ________________________________________________
// ---OR---- Operator cases  
// Selct which case you want to run and uncomment that case only,to see the result.

// Q1. How `OR` operator works?
// Sol. check among all the values , if any value is `True` 

// Q2. When `OR` operator stops(breaks) checking?
// Sol. Like said Above 
//      1.if any value is true ,then it stop(break) at that value(first comes true)
//      2.if no value is true ,then it will stop()(break) at the last value.(last comes false)

// This type is called short circuting ..only for the OR operator it will work effectively use.


// ----case 1---->
// scene: when all the values are true.

// let firstName = "kiran"
// let nickName = "kir"
// let surname = "ha"

// let name = firstName || nickName || surname
// console.log(`name is ${name}`)


// ----case 2---->
// scene:when among all the values only one value is true.
// 1.if any value is true ,then it stop(break) at that value

// let firstName = ""
// let nickName = "kir"
// let surname = undefined

// let name = firstName || nickName || surname
// console.log(`Bollean of empty string is  -- ${Boolean("")}`)
// console.log(`Bollean of  string is  -- ${Boolean(" ")}---`)
// // //=n   space has a acii value.. whatever ascii values being in the quote is true
// console.log(`bollean value of 0 is ${Boolean(0)}`)
// const check = name ?? "yes"
// console.log(`name is '${name}' so check is ${check}`)


// ----case 3---->
// Scene: when all the values are false.
// 2.if no value is true ,then it will stop()(break) at the last value.

// let firstName = null
// let nickName = undefined
// let surname = 0

// console.log(`boolean of null is ${Boolean(firstName)}`)
// console.log(`boolean of undefined is ${Boolean(nickName)}`)
// console.log(`boolean of 0 is ${Boolean(surname)}`)

// let name = firstName || nickName || surname
// // all values are false so among the last false value will log 
// console.log(`name is ${name}`)



// _____________________________________________________________

// --------------AND OPEERATOR CASES .....................
// while running comment all the cases and uncomment only which you want to check

// Q1. How `AND` operator works?
// Sol. if among all the values, every values is true.

// Q2. When `AND` operator stops(breaks) checking?
// Sol. Like said Above 
//      1.if all the values are true ,then it stop(break) at the last true value.(last comes true)
//      2.if any value is flase ,then it will stop()(break) at the first false value.(first comes false)


// ----case 1---->
// scene: when all the values are true.

// let firstName = "harsha"
// let nickName = "d"
// let surname = "ha"

// let name = firstName && nickName && surname
// console.log(`name is ${name}`)

// ----case 2---->
// scene:when one value is false 

// let firstName = ""
// let nickName = "d"
// let surname  ="haha"

// let name = firstName && nickName && surname

// // it will log the empty string 
// console.log(`name is ${name}`)


// ----case 3---->
// scene : when all the values are false.

// let firstName = null
// let nickName = undefined
// let surname = 0

// let name = firstName && nickName && surname

// // three values are false among those first false value will log
// console.log(`name is ${name}`)









