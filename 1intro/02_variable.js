var number = 123
number = "hello"
console.log(number)


// let name 
// console.log(name)

// error  becaz while using the const we must declare and intialize ...
// const name1
// console.log(name1)



//  declaring - giving a name 
var bike_name;
var car_name ;

//  these names given are called as identifiers 

//  intializing -- giving a value for which we have declared 

bike_name ="hero"
car_name = "bajaj"
let car_name2 = "tata"



// JavaScript, the concepts of declaration, initialization, and assignment are fundamental to understanding how variables work

//  ** Declaration 
// Declaration is the process of creating a variable. In JavaScript, you can declare a variable using var, let, or const.

// var: Declares a variable that is function-scoped or globally-scoped and is hoisted with an initial value of undefined.
// let: Declares a block-scoped variable, which is not initialized until the code execution reaches the declaration.
// const: Declares a block-scoped variable, which must be initialized at the time of declaration and cannot be reassigned


var a; // Declaration using var
let b; // Declaration using let
const c = 10; // Declaration and initialization using const

// ** Intialization 
// Initialization is the process of assigning an initial value to a variable at the time of its declaration.

// Variables declared with var are initialized to undefined if no initial value is provided.
// Variables declared with let are not initialized to undefined; they are in a "temporal dead zone" until the assignment is made.
// Variables declared with const must be initialized at the time of declaration.

var d = 5; // Declaration and initialization
let e  = 10; // Declaration and initialization
const f = 15; // Declaration and initialization (mandatory for const)


// ** Assignment
// Assignment is the process of giving a variable a value after it has been declared. Assignment can happen multiple times for variables declared with var and let, but not for those declared with const.

var x;     // Declaration
x = 5;     // Assignment
x = 10;    // Reassignment

let y;     // Declaration
y = 20;    // Assignment
y = 25;    // Reassignment

const z = 30; // Declaration and initialization
// z = 35;   // Error: Assignment to constant variable


// example : 

console.log("------------- var")
call
console.log("identifier given without the keyword-->var  ",call) // hoisting done -- while compiling var declaration will move the top 

var call
var city 
console.log("not assigned city",city)
city = "delhi"
city = "union territorys"  // reassigned as many times 
console.log("outsie city with var reaassigned ", city )

country =" India"
var country

function checkVar(){
    
    console.log("inside     ",country)
}
checkVar()
console.log("ouside  ",country)

// ----------------------
console.log("--------let")
//  let 

//  error >
// call1
// console.log("dentifier given without the keyword- let",call1) // Error: becaz Cannot access 'call1' before initialization
// let call1
// error |

let city1 // declare 
console.log("not assigned city1 -->",city1)
// Once the variable has been declared, even without an initialization, it exists in the scope and holds the value undefined. Therefore, accessing it does not cause an error.

city1 = "chennai" // assign
console.log("outside city1 ", city1)
function checkLet(){

    console.log("inside city1 with no change", city1)
    city1 = "south chennai" //  reassign the value with different value
    console.log("inside city1 with change ",city1)

    let city2 ="tiruvathapuram"
    console.log("inside city2", city2)
}
checkLet()

//  error
// console.log("outside city 2", city2) // error we can't call when it is declared inside the function 
//  let is function scope only 


//  const 

// error --> 
// const city4
// console.log(city4)// Error: we cann't acces without intiaizaion,,,Missing initializer in const declaration
// Error --|-

const city3 = "bangalore"

//  error >
// city3 = "south bengaluru"  //Error:Assignment to constant variable ---- we can't reassigned the values ...
// console.log(city3)
// error |
function checkConst() {

    console.log("inside with const", city3)
    const city4 = "trivendrum"
    console.log("inside the city4 with const",city4)
}

//  error   >  
// console.log(city4) // const also block scope we can't acces
// error    |


