//  push
//  .push("elemetn1","elements2".....) //
// adding the element at  the end of the array
console.log("-----------push");
const fruits = ["mango", "grapes", "sapota"];
console.log(fruits);
console.log(fruits.push("jackfruit")); // it will give the length of the fruits
fruits.push("melons", "strawberry", "vonkay ");
const fruits1 = [];
console.log(fruits);

// NOTE : 
// when  using template literal array implicitly converted into toString,
console.log(fruits)
console.log(fruits.toString())
console.log(`by using the template literla 
            ${fruits}`)


// ______________________________________________________________
// concat
// .concat(elem1,elem2,....)
// adding the array elements into one one array
console.log("--------concat");
const cityAP = ["hyd", "vijayawada"];
const cityTN = ["chennai", "coimbautre"];
console.log(cityAP);
console.log(cityTN);
const citysAPTN = cityAP.concat(cityTN);
const cityUT = ["delhi","ponducherry"];
const citiesIN = cityUT.concat(cityAP, cityTN);
console.log(citiesIN);
console.log(citiesIN.concat("hel"));

// _________________________________________________________________
// .pop
// pop()
//  remove the last element of the array. ......
console.log("---------pop");
const goals = ["starship7", "starshiop6", "starship5", "starship4"];
const removedItem = goals.pop();
console.log(`completed Item of goals is --- ${removedItem}`);
console.log(`after removedItem of goals --${goals}`);

// _________________________________________________________
// slice ()
//slice(startIndex,endIndex)//| end index notIncluded...while giving output
//  // cutting the cake int o pieces without modifying the original array ,, it return the shallow copy of the array ...
console.log(`-----slice`);
const items = ["pepsi", "sprite", "thumsup ", "mango", "orange"];
let sliceDrinks = items.slice(0, 3); // upto before 3rd index it will slice means it prints 0 to 2
let slicedFruits = items.slice(3); // start from 3 to end if not mentioned anything
console.log(sliceDrinks)
console.log(sliceDrinks.toString())
console.log(`sliceDrinks ${sliceDrinks}`);
console.log(`slicedFruits  - ${slicedFruits}`);

// ____________________________________________________________
// splice()
// splice("startInex","delete count",added items1,added items2,.....)
//  used to modify the array by deleteing the items and adding the items

const vegetables = ["toamto", "vonkaya", "carrot", "mango", "grapes"];

const splicedVege = vegetables.splice(3, 2, "brinjal", "dondakaya");
//  explanation - starting teh
console.log(`removed items ${splicedVege}`);

console.log(`after removing fruits and adding vegeatable __ ${vegetables}`);

const vehicles = ["volvo", "bmw", "ninja bikr", "tvs"];
console.log(vehicles.splice(2)); // last two options are optional
const bikes = ["activa", "roya enfield", "rx100"];
console.log(vehicles.splice(2));

// __________________________________________________________
//  includes()//
const flights = ["starship1", "starship2", "starship3", "starship4", "mars"];
if (flights.includes("starship1")) {
  console.log(`star ship1 was their`);
}else{
  console.log(`it's not their.......`)
}

// ___________________________________________________________
// sort()
//  sorting the items in ascneding order /./
const keys = ["zebra", "apple", "ball", "orange", "bananan"];
keys.sort();
console.log(keys); // keys.sort mutate the array ,,,

// but for the numbers it was different ...........

let numbers = [5, 3, 2, 4, 1];
numbers.sort()
console.log(numbers) //| numbers are not sorted . ..instead they are sorted in the form of index...

// for making the ascending order
function funcAscending(a, b) {
  console.log(`${a}  - ${b} is ${a - b}`);
  return a - b;
}

function funcDesecding(a, b) {
  console.log(`${b} - ${a} is ${b - a}`);
  return b - a;
}

numbers.sort(funcAscending); // based on the difference whether positive or negtive it will arrange ...
console.log(numbers);
numbers.sort(funcDesecding);
console.log(numbers);
// _________________________________________________________________
// split()  -- string method
// split("elements",limit) // based on the element it will split whole the string
// split will convert string into array of characters....
//  join()-----------
// join is a array method ...convert the array into the string ....
console.log(`[--- split()----------------] and Join() -------------`);
const message = "starship will definetly go to mars by 2026  ";
console.log(message);
let messageArr = message.split(" "); // split will divide based on the space
console.log(messageArr);
let messageArrReverse = messageArr.reverse();
console.log(messageArrReverse);
let messageArrJoin = messageArr.join(" ");
console.log(messageArrJoin);

let naamMera = "malayalam";
let naamMeraArr = naamMera.split("");
console.log(naamMeraArr);
let reverseStr = naamMeraArr.reverse();
console.log(reverseStr);
console.log(reverseStr.join(""));
let res = reverseStr === naamMera ? "yes" : "no";
console.log(res);
// ________________________________________________________________
console.log(`---------split examples--------------`);
let mess = "hello h1a i 2am w3aiting for you 4au";
// error
//  let messJoin = mess.join("e") // error  becaz join is array method ...so first we have to convert into the array then join ..
// console.log(messJoin);// error
// error
let messSplit_a1 = mess.split('a',2) // it will split at t a i.e remove a from the string // it will split first  two a only 
console.log(mess)
console.log(messSplit_a1,"up to first 2 a it will split")

let messSplit_a = mess.split('a') 
console.log(messSplit_a)
let messSplit_space = mess.split(" ") // it will split at single spave ' '
console.log(mess)
console.log(messSplit_space)


console.log(`------------join examples-------------------`)



const reply = ["hello","hi ","ha","how","are","you"]
let replyJoin = reply.join(" - joined - ")// whatever you elements you are passig as the arguments it will join teh array elemenst
console.log(`replyJoin with --------
  ${replyJoin}`)

// ___________________________________________________________________________
  // spread operator//
  // ...  -> spread operator ..means -- we have the peanut butter in the box(Array) , we will spread on the bread .. so array elements are spread line wise into something...
  console.log(`--------spread operator-----------`)
  const states = ["ap","tn","tg","ke","ka"]
const capitals =["amaravathi","chennai","hyderabad","thiruvannamli","bangalore"]
const south =[...states,...capitals,"south",5]
console.log(`states ${states}`)
console.log(`capitals -- ${capitals}`)
console.log(`south -- ${south}`)
const india = [...states,"mp",27]
console.log(india)

// _______________________________________________________________________________________
// destructor operator...
// destructer the array elements by storing in other varialbles...unpacking the elements
console.log(`-------------------------destructor-------------------------`)
let details =['kiran',"hyd",'software engineer','1.6','mern']
console.log(`details -- ${details}`)

let [name,location,field,exp,domain] =details // destructing into the deataisl...by giving specific names to call as below mentioned...
console.log(`name - ${name}`)
console.log(`location-- ${location}`)
console.log(`field -- ${field}`)
console.log(`exp -- ${exp}`)
console.log(`domain --- ${domain}`)

let projects =['portfolia','facebook','e commerce','exam portal']
let [personal,...others] = projects
console.log(`projects =  ${projects}`)
console.log(`pesonal projects - ${personal}`)
console.log(`others projects -${others}`)

// example for swapping... 

let one = 10;
let two = 30;

[one, two] = [two, one];

console.log(`after swapping one is ${one}`);
console.log(`after swapping two is ${two}`);


// copy by refernece the arrays..............
console.log(`-------copy by reference------------`)

const array1 = [1,2]
const array2 =array1
array2.push(3)
console.log(`${array1},${array2}`)

console.log(`araray 1 - ${array1}`)
console.log(`array2 -- ${array2}`)







