// -------------------------------------
//  --syntax-- :  string.indexOf(searchValue , index)
//  searchValue : is the value searching at the given text..
//  index       : from which index in the text , it should started from 
//  it will print the starting index of the letter in the text if found, else if it doesn't found  return -1 .. represents not present

let sentence = "starship leads to mars someday definetly,let's go to mars";
console.log("hello hea".indexOf("e"));
console.log("first".indexOf("z"));
console.log(sentence.indexOf("@"));
console.log(`mars position from starting ...${sentence.indexOf("mars")}`); //
console.log(`mars position after 18 index.. ${sentence.indexOf("mars", 19)}`); //  mars position start from 19 .

const charFind = (text, char) => {
  console.log(text.indexOf(char));

  return text.indexOf(char) != -1 ? `found` : "not found";
};

const res = charFind("hello ha i quit seeing", "h");
console.log(res);

//
// lto find the index of the word in the given sentence
let sentence1 = "hello ha i need to avoid looking";
console.log(sentence1.indexOf("ha")); // ha starting at 6 from 0

// ----------------------------------------------------------------------
// includes()
//  to check whether the substring provided present or not .......

// syntax for find
// string.includes(searchvalue, start)

let message2 = "hello i felt like no.. to ha";
// in the includes the substring exactly matched in the string we are comparing..
console.log(message2.includes("no"));
console.log(message2.indexOf("no"));
console.log(message2.includes("no", 19)); // searching the no after 19 th posiot no
console.log(message2.includes("yes")); // \ not presetnt

// If the computed index(starting index) i.e the position from which the search will begin is less than 0, the entire array will be searched.

var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o", -2);
console.log(`check whens serached - given.. ${check}`);

// --------------------------------------
// tolowercase, to uppercase ----------------
//  upperCase & lowerCase

let message1 = "jelloi ajfsdhjkaAAASFUEHIUEGjkadjkshg";
console.log(`toLowerCase ${message1.toLowerCase()}`);
console.log(`toUpperCase ${message1.toUpperCase()}`);

// problem on whether all vowels present in the string or not . 
const message = "SADFHJ AJKSDHJkjajksdjkfaei";
// let flag = 'ehll';
const vowelsPresent = (m) => {
  let flag = true;
  let s = m.toLowerCase();
  let vowels = "aeiou";
  let arr = [];
  for (let char of s) {
    if (arr.includes(char)) {
      continue;
    } else if (vowels.includes(char)) {
      arr.push(char);
    }
  }
  console.log(arr);
  const output = arr.length == 5 ? true : false;
  return output;
};
// console.log(flag)
let res1 = vowelsPresent(message);
console.log(res1);
console.log(`res is  ${res1}`);

// ------------------------------------------------------------------
//  subString ................

// syntax....
// string.substring(Startindex, Endindex)

let name = "hello ha i like you ";

let substring = name.substring(0, 10);
console.log(substring);
// ----------------------------------------------------------

//  trim.................

let name2 = "          helloo ha ..........where are              ";

let trimName = name2.trim();
console.log(name2);
console.log(trimName);

console.log(`trim start -removal of space at start --${name2.trimStart()}`);
console.log(`trim end -removal of space at end --${name2.trimEnd()}`);

let substring2 = name2.trim().substring(0, 15);
console.log(`substring with trim ... ${substring2}`);
// --------------------------------------------------

//  ----------------
