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

// _______________________________________________
// array to string..

// NOTE : 
// by using concatcation
console.log(['kria',23]+4232)

// toString()
console.log(['kria',23].toString() + 4232)

// template literal
let fruits0 = ['apple', 'banana', 'orange'];
let fruitsString0 = `${fruits0}`;
console.log(fruitsString0); // Output: "apple,banana,orange"

// by using join 
let fruits3 = ['apple', 'banana', 'orange'];
let fruitsString3 = fruits3.join(",")
console.log(fruitsString3); // Output: "apple,banana,orange"


// by using stringify
let fruits4 = ['apple', 'banana', 'orange'];
let fruitsString4 = JSON.stringify(fruits4)
console.log(fruitsString4); // Output: "apple,banana,orange"



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
//  // cutting the cake into pieces without modifying the original array ,, it return the shallow copy of the array ...
// we are getting new array with sliced items it wouldn't affect the original one
console.log(`-----slice`);
const items = ["pepsi", "sprite", "thumsup ", "mango", "orange"];
let sliceDrinks = items.slice(0, 3); // upto before 3rd index it will slice means it prints 0 to 2
let slicedFruits = items.slice(3); // start from 3 to end if not mentioned anything
console.log(sliceDrinks)
sliceDrinks.push("coaocaola")
console.log(sliceDrinks.toString())
console.log(`sliceDrinks --- ${sliceDrinks}`);
console.log(`slicedFruits  --- ${slicedFruits}`);
console.log('items',items)

// ____________________________________________________________
// splice()
// splice("startInex","delete items count",added items1,added items2,.....)
//  used to modify the array by deleteing the items and adding the items
// it was copy by reference , 
//  it will log the deleted items.. when we console
// after splicing it will affect the original array

const vegetables = ["toamto", "vonkaya", "carrot", "mango", "grapes","dragaon"];

const splicedVege = vegetables.splice(3, 2, "brinjal", "dondakaya","califlower");
//  explanation - 
// startIndex (3) => starting from index 3 i.e mango
// delete items count (2) => delete two items, start from index 3 i.e mango,grapes
// added items("brinjal", "dondakaya") => after delting two items , it wil add items from index 3 onward ,, if the delte count is 0 then ,no elments will remove ... 
console.log(`removed items ----`,splicedVege);
console.log(`after removing fruits and adding vegeatable __
  `,vegetables);
  
const noRemoveOnlyAdd =vegetables.splice(5,0,"bendakaya","sorakaya")
console.log('no elements were removed ', noRemoveOnlyAdd)
// 
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

// but for the numbers it was different ...........for positive numbers it will work effectively but negativve numbers it wouldn't



let numbers = [1,32,56,-2,-7,-1,34,2];
console.log(numbers)
numbers.sort()
console.log(numbers) //| numbers are not sorted . ..instead they are sorted in the form of index...


console.log("ascending , ")
// for making the ascending 
let numbers2 =[1,32,56,-2,-7,-1,34,2]
function funcAscending(a, b) {
  console.log(`${a} - ${b}  =  ${a - b}`);
  return a - b;
}
console.log(numbers2)
numbers2.sort(funcAscending); // based on the difference whether positive or negtive it will arrange ...
console.log(numbers2);

let numbers3 =[1,32,56,-2,-7,-1,34,2]

function funcDesecding(a, b) {
  console.log(`${b} - ${a} =  ${b - a}`);
  return b - a;
}
console.log(numbers3)
numbers3.sort(funcDesecding);
console.log(numbers3);


// ________________________________________________________________


// .join()
let mess = "hello h1a i 2am w3aiting for you 4au  5a  alaga  6a ayi 7a";

console.log(`------------join examples-------------------`)


//  join is converting array elements into the string 
const reply = ["array ","hello","hi ","ha","how","are","you"]
// syntax 
let replyJoin = reply.join(" - joined - ")// whatever elements you are passing as the arguments it will join the array elemenst
console.log(`replyJoin with --------
  ${replyJoin}`)

let mess2 ="i felt nothing. no feel .."
//  let messJoin = mess.join("e") // error  becaz join is array method ...so first we have to convert the string into the array then join ..
// console.log(messJoin);// error
// error
let messJoin = mess.split(" ").join("-join-")
console.log(mess)
console.log(messJoin)
//| now i am joining the mess string after connverting into array 


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


//  in function calling it was used.. 
function sum(...args) {
  // we don't know how many arguments are coming... 
  console.log("normal into the array , sum ---",args) //by using spread operator these args are automatically converted into the array ... 
  let sum =0;
  args.forEach((x)=> sum += x)
  console.log("summ ",sum)
  
}
sum(2,4,6,8,10)

// ___________________________________________________________________________________

// destructor operator...
// destructer the array elements by storing in other varialbles...unpacking the elements
console.log(`-------------------------destructor-------------------------`)
let details =['kiran',"hyd",'software engineer','1.6','mern']
console.log(`details -- ${details}`)

let [name,location,field,exp,domain] =details // destructing into the deataisl...by giving anyfd names to call as below mentioned...
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

//  usage in function calling
function diff(args) {
  console.log("array  into normal ,diff ---" ,...args )

}
diff([1,2,3,4,5,6])

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


// ___________________________________________________________________
// -------------------------------------
// every(callbackFn)
//        -> passing elements to the -> callbackFn(element,index,arry)
// every(callbackFn, thisArg)
 
const items3 = [23,1,1,4,5,2,1,45]
const items4 = [-23,34,2-23,24,2]

//  .every() -> will check every element in the array ...
function check3(item ){
  return item > 0
}
let res3 = items3.every(check3)
let res4 = items4.every(check3)
console.log({res3}) // all values are positve 
console.log({res4}) //| negative values are there


// to check whether items5 array  in decresing order 


const items5 =[34,23,2,-1,-7]
const res5 = items5
                  .filter(elm => elm>0)
                  .every((elm,index,arr)=> {
                    console.log({elm})
                    console.log({index})
                    console.log({arr})


                    if(index ==0) {return true}
                    return arr[index-1] > elm
                  })

console.log(res5)


// --- extra for non array objects.....

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // ignored by every() since length is 3
};

console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true


// -----------------
//  shift()
let items6 = [1,2,3,4,5,6]

console.log(items6.shift()) // remove element from start , no arguments are passed ..
console.log(items6) 

// -----------------
// unshift(...numbers)
let items7 = [1,2,3,4,5,6]
console.log(items7.unshift(7,8,9)) // add elments at the start
console.log(items7)


// ------------
// for removing the item
// filter() 
let items8 = [1,2,3,4,5,6,3,3,3,3]

let items9 = items8.filter(ele => ele !== 3)
console.log(items9)

// ----------------------
