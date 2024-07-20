/// higher order fucntion .
/***
 * if a function returns another function or function passed as the argument.
 * then it can be callecd higher order functino .
 *
 */
// ????

// first class function
function wraper(name = "normal calling") {
  console.log(
    `"
     calling wrapper"`,
    name
  );
  return "hello . ", name;
}
const res = wraper();
console.log(res);

// higher order function
//  function taking function as a argument
function higher(wraper) {
  console.log(`inside the higher `);
  return wraper;
}
const res2 = higher(wraper);
const returnedWrapper = res2("kiran..");

function higher2() {
  return function () {
    console.log(first);
  };
}

//  usage of higer order function ............

const array = [1, 2, 3, 4, 5];

function square(arr) {
  let tempArr = [];
  for (let num of arr) {
    tempArr.push(num ** 2);
  }
  return tempArr;
}

const squareRes = square(array);
console.log(`square of an array .`, squareRes);

function cube(arr) {
  let tempArr = [];
  for (let num of arr) {
    tempArr.push(num ** 3);
  }
  return tempArr;
}

const cubeRes = square(array);
console.log(cubeRes);

// for having higher power of number it 's waste of tiem ... in this case.. whichever function was repetitive at that time it can used..


const arr1 = [6,7,8,9,10]
function squareMin(num) {
    return num ** 2
}
function cubeMin(num){
    return num ** 3
}
function fourthMin(num) {
    return num ** 4
}
function calculatePower(wrapper,arr) {
    let tempArr = []
    for (let num of arr){
        tempArr.push(wrapper(num))
    }
    return tempArr
}

const squareMinRes = calculatePower(squareMin,arr1) 
console.log(`squareMinRes through the higher order
  `,squareMinRes)

const cubeMinRes = calculatePower(cubeMin,arr1)
console.log(`cubeMin thorught the higher order
   `,cubeMinRes)

const fourthMinRes =calculatePower(fourthMin,arr1)
console.log(`fourth min through the higher order
  `, fourthMinRes)

// ---------------------
