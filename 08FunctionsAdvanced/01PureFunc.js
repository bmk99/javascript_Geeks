// pure functions .

/*
 *1.it should return
 *2.it shuld accept the arguments
 *3.the result should not influenced by the outer parameters..
 *4.original parameters should not mutate .
 *5.for the same input it should be the same output..
 */
//
// below examples shown , pure function should be like that

// NOTE: COMMENT EITHER
//--1.it should return & 2.it should accept the arguments..

// impure
function impure1_2() {
  console.log("hello");
}

// pure
function pure1_2(name) {
  return `i am fond of ${name}`;
}

impure1_2();
const pure1Res = pure1_2("kiraha");

//  --3.the result should not influenced by the outer parameters..

const x = 5;
// impure
function impure3(num) {
  return num * num * x;
}

// pure
function pure3(num) {
  return num * num;
}

const impure3Res = impure3(5);
console.log(`impure3  -  ${impure3Res}`);

const pure3Res = pure3(5);
console.log(`pure3 ${pure3Res}`);

// --4.original parameters should not mutate .

// impure
function impure4(arr) {
  arr.push(5, 6);
  return arr;
}

// pure
function pure4(arr) {
  let newArr = [];
  newArr.push(...arr, 5, 6);
  return newArr;
}

const arr1 = [1, 2, 3, 4];
const impure4Res = impure4(arr1);
console.log(`impure4Res is `, impure4Res);

const arr2 = [10,20,30 ,40];
const pure4Res = pure4(arr2);
console.log(`pure4Res`, pure4Res);


// -- 5.for the same input there should be the same output..


// impure 
function impure5(arr) {
    arr.push(10,20)
    return arr
}
const arr3 =[1,2,3,4,5]
const impure5A = impure5(arr3) 
console.log(`impure5A` , impure5A)

const impure5B = impure5(arr3)
console.log(`impure5B `, impure5B)



function pure5(num) {
    let x = 20 
    return num +x
  
}

const pure5A = pure5(100) 
console.log(`res5A`, pure5A)

const pure5B = pure5(100) 
console.log(`res5B`,pure5B)