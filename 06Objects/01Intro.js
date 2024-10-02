//  object literals...
// writing the object with concise and readable syntax
//  ways to create the object keys inside the object
// a property contains key and value
const details = {
  key: "value",
  name: "kiraha",
  city: "Hyderabad",
  field: "software",
  "years of experience": 1.6,
  salary_per_Annum: 3000000,
  openings: ["hyd", "chennai", "bangalore"],
  address: {
    HouseNO: "1/3598-2",
    city: `yemmiganur`,
    pincode: 518360,
  },
};

console.log(`name is called by using the dot --- ${details.name}`);
console.log(`calling the years of experience by using bracket-- 
    ${details["years of experience"]}`);
console.log(`salary by bracket --  ${details["salary_per_Annum"]}`);
console.log(`key not present in so - ${details.age}`);
console.log(details.openings);
console.log(`adress in the form of object --${details.address}`);
console.log(
  `adress in the form of object calling .. ${details.address.HouseNO}`
);

console.log(`--------------`);
//  key as function inside the obj is called as the nethod
const obj1 = {
  name: "kiran",
  displaInfo: function () {
    console.log("hello i am displayInfo");
  },
  details() {
    console.log(`details aaa`);
  }, // here automatically details will call without giving the key value
};

obj1.displaInfo();
obj1["displaInfo"]();// we call the method like this also.
obj1.details();

// --- computed property
console.log(`------------ `);

let country ="country"
let obj2 = {
  name: "ha",
  city: "hyderabad",
  [country]:"india"
};

console.log(`obj2 is  ${obj2}`); // in template literla it will convert into the to stringify.........
console.log(obj2);
obj2.age = 25; // commuted property // to calculate or assign something or to determine ... 
console.log(obj2);
obj2["interst"] = "travelling";
console.log(obj2);
const job = 'job'
obj2[job]="software" // dynamically or not ???...
console.log(obj2)
obj2  = {}
console.log(obj2)



// --creting multiple objects with the same properties.
//| normally creating the object/
function displaInfo(name, city) {
  return {
    name: name,
    city: city,
  };
}
const res = displaInfo("noha", "hyderabad");
console.log(res);

// same can rewrite asc
// when key and the value has the same name .. then it can be write with single name ..
function meetInfo(place, time) {
  return {
    place,
    time,
  };
}
const res2 = meetInfo("dlf", "evening");
console.log(res2);
console.log(`callin ge the res2 ---${res2.place}`);

// 