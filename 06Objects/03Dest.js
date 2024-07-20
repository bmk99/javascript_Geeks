const person0 = {
  name: "kiraha",
  city: "hyderabad.",
  occupation: "software",
  movies: {
    hero: "surya",
    vilain: "sjsurya",
    allRounder: "prakashRaj",
    music: "arRehman",
  },

  favorites: ["draksha", "pineapple", "chapathi", "dosa"],
};
console.log(`person0 --`, person0);

// error // check start destrucring
// const {username , location,profession, films,Likes} = person0 // it is not same as we do in the arrayss.. here we need to give the keys present in that object.
// console.log(`after destructing the person1 like we do in array -- throws undefined`)
// console.log(username)
// console.log(location)
// console.log(profession)
// console.log(films)
// console.log(Likes)
// error check end

// correct way to destrucrtin way1  start

// let {name,city,occupation,movies,favorites} = person0
// console.log(`after destructing by their real key name ....`)
// console.log(name)
// console.log(city)
// console.log(occupation)
// console.log(movies)
// console.log(favorites)

// way1 end

// destrucring way2  start
//  if we want to change the key names then.....
// Note: while running destrucrte way2 comment the Destructure way1
const {
  name: username,
  occupation: profession,
  city: location,
  movies: films,
  favorites: likes,
} = person0;
console.log(`after destrucring .. keys names redefined with new names..`);

// console.log(name) // error it throws error because it is not defined..to call the name .we need to call by username
console.log(username);
console.log(location);
console.log(profession);
console.log(films);
console.log(likes);

//  destructive way2 end

//  more examples
console.log(`more info `);
// -----------------------------------------------------------
console.log(`-------------
    info -1 `);
let person1 = {
  age: 34,
  place: "hyderabad",
};
let { age } = person1; //| no need to give all the keys in the object we can bypass anything , we can write what we want only .........
console.log(`person1`, person1);
console.log(`age :`, age);

// ----------------------------------------
console.log(`------------
    info - 2`);
const person2 = {
  education: "b.Tech",
  salary: 210000,
  job: {
    domain: "MERN",
    yop: 1.6,
    ctc: 300000,
  },
};
const { education, ...rest } = person2; // by using the spread operator we can conclude at last whatever left
console.log(`person 2 `, person2);
console.log(`education --`, education);
console.log(`remaining -`, rest);

// -----------------------------------------------------------------
console.log(`-------------
    info 3 `);
const person3 = {
  contact: {
    linkedin: "madhu-kiran",
    x: "someone1999",
    snapchat: "bmk1999",
    github: "bmk99",
  },
  games: ["volleybal", "shuttle"],
  destinationCity: "canada",
  father: "maheswara reddy",
  mother: "anuradha",
  sister: "sravani",
};
let {
  contact: { linkedin, x, snapchat, github },
  destinationCity,
  games: [game1],
} = person3; // in contact we are destrucring inside the contact object....
console.log(`person 3`, person3);
// console.log(contact.linkedin) // error it throws undefined becaz contact is again destrured so we need call by their nested key value
console.log(`contact linkedin --`, linkedin); // by nested object destructing
console.log(`contact x`, x);
// console.log(`calling the games `,games)

console.log(`inside the games array calling by destructing == `, game1); // by array destrucritng

// ------------------------------------------------------------------

console.log(`----------
    info 5`);
const person5 = {
  office: {
    emp1: {
      name: "kiraha",
      age: 23,
      acheivements: {
        hike: 5000,
        employeeOfTheMonth: 4,
      },
    },
    emp2: {
      name: "ha0",
      age: 25,
    },
  },
  youtube: {
    emp1: {
      name: "ha1",
      age: 25,
    },
    emp2: {
      name: "ha2",
      age: 24,
    },
  },
  personal: {
    emp1: {
      name: "ha3",
      age: 27,
    },
    emp3: {
      name: "ha4",
      age: 28,
    },
  },
};

let {
  office: {
    emp1: {
      name: OffEmp1Name,
      acheivements: { hike: OffEmp1Acheivements },
    },
    emp2,
  },
} = person5;

console.log(OffEmp1Name);
console.log(OffEmp1Acheivements);
console.log(emp2);

let {
  personal: { emp1: perEmp1, emp2: perEmp2 },
  youtube: { emp1: youEmp1, emp2: youEmp2 },
} = person5;
console.log(`person emp1 - `, perEmp1);
console.log(`person emp2 - `, perEmp2);

console.log(`youtube - `, youEmp1);
console.log(`youtube emp2 - `, youEmp2);
//  ----------------

// calling the object /

const GamesDetails ={
  cricket :11,
  volleyball : 6,
  kabaddi:7,
  tabletennis :1,
  football :11,

}

const entries = Object.entries(GamesDetails)
console.log(entries) // it wil give key and values in the form of arrays as 
// key and value in array,, like that..

const keys = Object.keys(GamesDetails)
console.log(keys) // keys or properties or member. return in the form of arrays
const values = Object.values(GamesDetails)
console.log(values) // only values
console.log(Math.max(...values)) // from the array we can get the math properties //



