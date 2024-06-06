``// arrow functions simplied version of the normal function......

// functional expression
const normalFunc = function (n, a) {
  return n + a;
};

const res1 = normalFunc(10, 20);
console.log(`res1  ${res1}`);

// arrow function ..........

const arrowSum = (n, a) => {
  // simply replaces the function with arrow mark
  return n + a;
};
const res2 = arrowSum(10, 20);
console.log(`res2  ${res2}`);

// usage of arrow function is minimize the code.. simpliciy the code.......
// same arrow function can be written in one line

const arrowSum1 = (n, a) => n + a; // arrow function with sigle expression will return that implicityly
const res3 = arrowSum1(10, 20);
console.log(`res3-  ${res3}`);




// like for ex

//  another ex .. instead of using the if and else . u can use terinary operator
const addOrSub = (n,a)=> n>a ? `subtraction n<a ${n-a}`:`addition n > a -- ${na}`
const res5 = addOrSub(20,12)
console.log(`res5 -- ${res5}`)