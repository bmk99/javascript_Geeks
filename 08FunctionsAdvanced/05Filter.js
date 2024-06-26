// filter also same exactly like map accepts higher order function .
// based on the condition if it is true then it will return value into a new array

// i want the values only if array values greater than 5
const arr = [9, 2, 3, 5, 6, 6, 3, 12, 2, 35, 2, 1, 1];
function wrapper(array) {
  let tempArr = [];

  for (let num of array) {
    if (num > 5) {
      tempArr.push(num);
    }
  }
  return tempArr;
}
const resWrapper = wrapper(arr);
console.log(resWrapper);

//so by using the filter 

function check(num) {
    console.log(num >5 && num)
    return num >5 
}
const resFilter = arr.filter(check)
console.log(resFilter)



const obj = { a: 1, b: 2, c: 3 };
const res = Object.entries(obj)
console.log(res)

const returnToObj = Object.fromEntries(res)

console.log(returnToObj)


const filteredObj = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 1)
);

console.log(filteredObj); // { b: 2, c: 3 }
