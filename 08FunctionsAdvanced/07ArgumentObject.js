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
// when no default in the parameters// 
//  we can change..1. by parameter 
//                 2 .through inbuilt arguments...
function meetInfo2(s) {
  console.log({s})
  console.log({arguments})  // arguments = s
  s = 100;                  // s changed
  console.log({arguments}) // argument also reflected
  arguments[0] = 80          // argument changed 
  console.log({arguments});   // argument reflected ..changing s also 
  console.log({s});        // s reflected also argument as well as s
}
meetInfo2(10);

console.log(`-------------
    `);

//  having default parameter............
// we change the argument by 
//       1. by parameter only 
// even  when we change with the argument it would'nt relfect in parameter ......but it reflects in the arguments....
//  parameter change to parameter
//  argument change to argument....
function meetInfo3(s = 30) {
  console.log({s})
  console.log({arguments})  // arguments = s
  s = 100;                  // s changed
  console.log({arguments}) // but argument doesn't reflected(it doesn't change)
  arguments[0] = 80          // argument changed 
  console.log({arguments});   // argument reflected .but s doen't reflected 
  console.log({s});        // s reflected  from s only 
}
meetInfo3(26);


//  when no arguments are passed .
// also same  as above .. having default value..
function meetInfo4(s = 30) {
    //-- -check 
    console.log(s)
    console.log(arguments)
      s =70

  console.log(arguments);// s having default values so it takes from the argumenst
  arguments[0] = 50;
  console.log(arguments);
  console.log(s);
}
meetInfo4();
