//  Logical operators..........
//  || _OR -> if atleast one condition is true
//  && _AND -> all condtions must be true i.e if one condition is false it wouldn't return anything
//  ! _NOT  -> works for only the boolean values .. it reverse the boolean values
//  ??_ NULLISH OPERATOR ->

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
// _________________________________________________________
// -------------|| _OR_  operator ----------------
//  change the below values either true or false and see the resutl
let passport = true;
let aadhar = false;
let driving = true;

if (passport == true || aadhar == true || driving == true) {
  console.log("Exam--GO and write the exam ");
} else {
  console.log(
    "Exam ---Stop  GO back and brign any of the aadhar,driving,aadhar etc"
  );
}
// ___________________________________
// ---------- ! NOT OPERATOR-----------

//  oppsite the boolean value if value is true then it shows false .. vice versa.......
let eligible = true;

if (!eligible) {
  console.log("you are not eligible ");
} else {
  console.log("you are eligible .");
}

// _______________________-
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
console.log(rating ?? "price not revieled yet wait for some time") // here if we are not using _OR_ operator becaz it will print the message so to avoid in this cases we use nullish





// ________________________________________________
// ---OR---- Operator cases  
// while running comment all the cases and uncommen only which you want to check

// //  here logic is what will do the or operator generallly ................
// // when or operator stops checking (like when it satisfy or break ...) while compiling
// //     -1. when among all the values if any one value is true                  ----first comes true
// //     -2. when all the values , if every value is false                       ---- last comes false
// // so exactly hahppen above in the case 5

//  this type is called short circuting ......... only for the OR operator it will effectively use
// case 1------

// let firstName = "kiran"
// let nickName = "kir"

// let name = firstName || nickName
// console.log(`name is ${name}`)

// case2--------------

// let firstName = ""
// let nickName = "kir"

// let name = firstName || nickName
// console.log(`Bollean of empty string is  -- ${Boolean("")}`)
// console.log(`Bollean of  string is  -- ${Boolean(" ")}---`)
// console.log(`bollean value of 0 is ${Boolean(0)}`)
// // //=n   space has a acii value.. whatever ascii values being in the quote is true
// console.log(`name is ${name}`)


// case 3 ---------------

// let firstName = null
// let nickName = undefined

// console.log(`boolean of null is ${Boolean(null)}`)
// console.log(`boolean of undefined is ${Boolean(undefined)}`)
// let name = firstName || nickName
// // all values are false so among the last false value will log 
// console.log(`name is ${name}`)



// case 4--------------


// let firstName = undefined
// let nickName = "kiran"

// let name = firstName || nickName
// // among the values nickname was true it will log that 

// console.log(`name is ${name}`)


// case 5-------------------

// let firstName = ""
// let nickName = undefined

// let name = firstName || nickName

// // here both values are false ......... so last false value will log
// console.log(`name is ${name}`)






// _____________________________________________________________

// --------------AND OPEERATOR CASES .....................
// while running comment all the cases and uncomment only which you want to check

// //  here logic is what will do the=== AND ====operator generallly ................
// // when ==AND== operator stops checking (like when it satisfy or break ...) while compiling
// //     -1. when among all the values if any one value is FALSE           ----first comes FALSE
// //     -2. when among all the values ,if every value is true                ---- last comes TRUE
// // so exactly hahppen above in the case 5


// case 1 

// let firstName = "harsha"
// let nickName = "d"

// let name = firstName && nickName

// both values are true then , last true value will log.........
// console.log(`name is ${name}`)

// case 2

// let firstName = ""
// let nickName = "d"

// let name = firstName && nickName

// // it will log the empty string 
// console.log(`name is ${name}`)

// case 3

// let firstName = "hfaskdj"
// let nickName = ""

// let name = firstName && nickName
// // it will log the empty string 
// console.log(`name is ${name}`)


// case 4 

let firstName = null
let nickName = undefined

let name = firstName && nickName

// two values are false among those first false value will log
console.log(`name is ${name}`)









