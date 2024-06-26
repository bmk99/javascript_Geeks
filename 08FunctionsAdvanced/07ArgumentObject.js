// arguments object..
// this will work only for normal functino
// arguments conains all the values passed to the function

function meetInfo(a, b) {
  console.log("hello ");
  console.log(arguments); // arguments is inbuilt keyword
  console.log(typeof arguments);
  console.log(arguments[0]);
  let sum = 0;
  console.log(`------`);
  for (let value of arguments) {
    console.log(value);
    sum += value;
  }
  console.log(`-------`);
  console.log(arguments.length);
  console.log([...arguments]); // in the form of array
  console.log(sum);
  console.log(a);
  console.log(b);
}
meetInfo(10, 20, 30, 40, 50);

console.log(`------------
    `);

// s is a normal parameter no default value for s
// when no default in the parameters//  we can change.. by parameter or through arguments...
function meetInfo2(s) {
console.log(arguments)
  s = 100;
  console.log(arguments)
  arguments[0] = 80
  console.log(arguments); 
  console.log(s);
}
meetInfo2(10);

console.log(`-------------
    `);
//  having default parameter............

function meetInfo3(s = 30) {
    //-- -check 
    // console.log(arguments)
    //   s =70

  console.log(arguments);// s having default values so it takes from the argumenst
  arguments[0] = 50;
  console.log(arguments);
  console.log(s);
}
meetInfo3(26);
