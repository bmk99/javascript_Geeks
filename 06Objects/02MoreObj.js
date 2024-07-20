// by using the for loop
let obj1 = {
  name: "kiraha",
  city: "hyderabad",
};
let isExist = "age" in obj1;
console.log(`check whether exist or not .. ${isExist}`);

//  in loop will call only keys ....
for (let key in obj1) {
  console.log(`key is  -${key}- and value is -${obj1[key]}- `);
}


// remaining for loops willnot work in objects.........
// copy by reference............ ...

let obj2 = obj1;
console.log("obj2", obj2);

obj2.age = 25;
console.log("obj2 after adding age", obj2);

console.log("obj1... - ", obj1); // when changing obj2 obj1 also changing.....

// so while changing copying object orinial object also changes.. to avoid that ...we have to use assign method...

// ........
// shallow copying .
// this will also come under shallow copying....except when we don't insert nested objects in object
// syntax  - Object.assign(target:{},source:any)
let obj3 = Object.assign({}, obj1);
console.log("obj3 is ", obj3);
obj3.interst = "traveling";
console.log(`after updating with interst `, obj3);
console.log(`copying one --`, obj1);
// | now obj3 was not reflecting in obj1 when we do any modifications in obj1

let person1 = {
  name: "person1",
  age: 25,
  address: { city: "hyderabad", state: "andhra pradesh" }, //| nested object
};
console.log(` original one before changing`, person1);
let person2 = Object.assign({}, person1);

person2.name = "person2";

person2.address.city = "chennai";
person2.address.state = "tamilandu";
console.log(
  `original - after changingin person2 ,,  address only changes not name  `,
  person1
);
console.log(`copying by assing changing address...`, person2);

//  deep copy when we use json stringify .. then nested objects  also changes..
// __ pending deep copy ..

let person3 = JSON.parse(JSON.stringify(person1));

// person3.

// ---optional chaining --  ?.
// if a property in a object is not defined, when we call, it throws undefined.......
console.log(`-- optional chainging --`);

const obj4 = {
  name: "kiraha",
  city: "hyderabad",
  favorite: {
    food: "chapathi, toamto curry",
    crush: "someone",
    place: "kanyakumari",
    // games:"shuttle" //check purpose
  },

  // checking nested one - start
  // books:{
  //     crime :2,
  // fantasy:4
  // },
  // check done

  info: function () {
    console.log(` i am  the info`);
  },
  //  checking fucntion
  // moreInfo:function () {
  // console.log(`i am wolf alaways hididng`)
  // }
};

console.log(`checking the age  --`, obj4.age); // for properties it shows directly undefined ..but it doesn't happen in the case of neseted properties
console.log(`checking the favorite  in games --`, obj4.favorite.games);
// console.log(`checking the books --`,obj4.books.crime) // error .. when wetry to find the property which having nested object ... it thrws the error ,, same thing we can write using the optional chaining....
console.log(`checkign the books having the crime--`, obj4.books?.crime);

// calling the info function
obj4.info();

// checking whether the function is present or not
// obj4.moreInfo() // error it is not defined throws error
obj4.moreInfo?.(); // throw optional chaning checking the function              -- > first check whether the property present in the obj4 or not if present calling the function ...

// Note : don't use the optional chaining unnecessarillly .......... when u know something

// assigment  -check with bracket method ..

console.log(`----------using the bracket ...---------`);
console.log(`checking the age  --`, obj4["age"]);
console.log(`checking the favorite --`, obj4["favorite"]["games"]);
console.log(`checkign the books having the crime --`, obj4["books"]?.["crime"]);
console.log(
  `checkign the books having the fantasy--`,
  obj4["books"]?.["fantasy"]
);
obj4["info"](); // property should called by the string format then calling the function
obj4["moreinfo"]?.();
console.log("after more info");

// to av
