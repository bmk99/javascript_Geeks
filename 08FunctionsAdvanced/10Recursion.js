//  recursion ..
// recursion is a programme where the function is called it self
//for example
function sum(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    total += i;
  }
  return total;
}
console.log(sum(10));

console.log(`recursion ---
    `)
//  same total sum by using recursion ......

let i = 0;
function sumRecursive(n) {
  i++;
  console.log(`iteration -`, { i },`,  value - ${n}`);
  if (n == 1) {
    console.log(`inside last value `, { n });
    return n;
  }
  const res = n + sumRecursive(n - 1);
  console.log(`------res starts------`)
  console.log({ res });
  console.log(`---------------------`);

  return res;
}
const res = sumRecursive(10);
console.log("final ----", res);

console.log(`recursion concept........`)
//----------
function check(n) {
  return n;
}
const number = 10;
const sample = number + check(90);
console.log(`sample ---` + sample,number);
const iteration1 = number + check(9);
console.log(`iteration 1->`, iteration1,number);
const iteration2 = iteration1 + check(8);
console.log(`iteration 2->`, iteration2);
const iteration3 = iteration2 + check(7);
console.log(`iteration 3->`, iteration3);
const iteration4 = iteration3 + check(6);
console.log(`iteration 4->`, iteration4);
const iteration5 = iteration4 + check(5);
console.log(`iteration 5->`, iteration5);
const iteration6 = iteration5 + check(4);
console.log(`iteration 6->`, iteration6);
const iteration7 = iteration6 + check(3);
console.log(`iteration 7->`, iteration7);
const iteration8 = iteration7 + check(2);
console.log(`iteration 8->`, iteration8);
const iteration9 = iteration8 + check(1);

console.log(`iteration 9->`, iteration9);
