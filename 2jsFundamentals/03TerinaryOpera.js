//  Terinary operator..............
//  value ? (if value is true this will log) : (if value is false this will log)


const readlinesync = require("readline-sync");
let age = readlinesync.question("what is your age?  ");

let vote =
  age > 18
    ? "you are eligible to vore"
    : "not eligible to vote please wait some more years";

console.log(vote);

let marks = readlinesync.question("what are your marks");

const remark = marks > 45
  ? (marks > 75
    ? (marks > 95
      ? " A +"
      : " B +")
    : " C +")
  : " D +";

  let remarks1 = marks > 40 
  ?(marks>60
    ? (marks >70 
        ? "Genius A"
        : "Good B")
    : "Average C")
  :"Fail D"
//  for better readability we can give brackets whenver new terinary opened 
//  always remember to end with colon == : == 
console.log(remarks1)
console.log(remark)