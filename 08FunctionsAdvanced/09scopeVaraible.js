//  global variable ,local variable
var x = 950; // glovla variable .. access throught the file
let k = 5900; // global varainbale
debugger;
function greet() {
  console.log({ k });
  console.log({ x });
  x = 50;
  console.log({ x });
  var y = 50; // local varialble.. local scope..declared inside the function .. so only access in the function
}
greet();
console.log({ x });

// console.log({y}) // error = y is defined inside the function scope

function bye() {
  // console.log({y}) // / not global scope
  console.log({ x });
}
bye();

// -- global scope and local scope ..

{
  var s = 5090;
  let i = 233;
  let r = 23235;
}
console.log(s); // var is global scope...
// console.log(i)// error = not defined becaz let is block scope
// console.log(r) // error - not defined..it's block scope
