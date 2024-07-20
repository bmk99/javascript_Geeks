// create three objects having the difeerent name and function saying hello 

// -- way1 --
// implicitly we are calling the functions inside the object
console.log(`
    way 1--------------
    `)
const user1 ={
    name:"user1",
    greet :function() { // implicit binding.......
        console.log(this.name)
    }
}

const user2={
    name:"user2",
    greet :function() {
        console.log(this.name)
    }
}

const user3 ={
    name:"user3",
    greet :function() {
        console.log(this.name)
    }
}
user1.greet() 
user2.greet() 
user3.greet() 


// writing  the same function inside all three objects will makes complicated..... 

//  ----- way2 -----
console.log(`
    way2 ----same calling the function in reduce way
    `)
// to reduce this 
//  we created the three objects .. by writing the one function only 
function bye() {
    console.log("hey...",this.name)
}

const person1 ={
    name :"person1 ",
    byeInside:bye
}
const person2 ={
    name :"person2",
    byeInside:bye
}
const person3 ={
    name :"person3",
    byeInside:bye
}
person1.byeInside()
person2.byeInside()
person3.byeInside() 
console.log(user1.greet)  // 

// _______way 3 .. for calling the function by function wa_________
console.log(`
    way 3--------
    `)


// for calling the function we are writitn the method inside the object...... 
// instead we can do with function call,appply,bind 
//  ----------function borrowing .---- call , apply and bind...........
//  we are borrowing a function and explicitly call with object 
// if i want to call the function without 

const human1 = {

    name :"human1"
}
const human2 = {

    name :"human2"
}
const human3 = {

    name :"human3"
}
function welcome(age,dob) {
    console.log(`my name is  by ..${this.name}`)
    console.log(`age is ${age}  and dob is ${dob}`)
    console.log(`..
        `)
}

console.log(`way3 --function call 
    `)
//  all here we did is explicitly .... calling 
console.log(human1) 
//| now i want ot call the welcome function with object human1
// so ..
// welcome.call(25,1999) // error function will run this.name is undefined 
welcome.call(human1,25,1999)  // first one should be the object,from that we will log the values in the welcome function . ,, then arguments for the function, ..... here we are just attaching the function to the objects
welcome.call(human2,27,1998)
console.log(human1) // object wouldn't change

console.log(`way3 apply 
    `)

//syntax -  function.apply(object, [argument1,argument2,...]) // suntax for apply ...here arguments are passed in the form of array .. 
welcome.apply(human1,[30,1994]) // after object, arguments are passed in the form of array 
welcome.apply(human2,[32,2939])


console.log(`way3 bind 
    `)


// syntax -const res = function.bind(object,argument1,argument2) // arguments passing are optional we can pass in the returned function also but object is neccessary 
//  res(argument1,argumen2,)

welcome.bind(human1,22,2001)// it will return a fucntion,, so we have to store in a varibale
console.log('--0--')
welcome.bind(human1,22,2001)() //returned function calling directly without storing in the variable
console.log('--1--')
const resultBind = welcome.bind(human1,22,2001)
console.log(resultBind)
resultBind() // calling the returned function
const resultBind1 = welcome.bind(human2) // object passing is compulsary so that it can bind that function to that object 
console.log(resultBind1)
console.log('---2--')
resultBind1(45,2343) // arguments passed to the function welcome... 

console.log(`------------------------------------------------------------------------`)


// __ way 4 by using the constructor we can do easily create the objects and calling the functions........______-

console.log(`----
    way 4--------
    constructor`)

// -- constructor ,new keyword for creting the object in the simple way  -- 
//  same way can be rewritten by using the constructore in a simple way 

//|  new keyword and constructor function 

//  constructore functions are normal functions but 
// they  are 
//  started name with capital letter .. 
//  they are executed with new keyword only 


function User(name ,age) {
    // console.log(`hell ouser `,this) // this refers to the current function 
    this.name = name;
    this.age  = age;
    // console.log('first')
    this.greet =function(){
        console.log(this.name)
    }
}



const alien1 = new User("kiraha",25) 
const alien2 = new User("alien2",26)
const alien3 = new User("alien3",27)




// User("kira","hel")
console.log(typeof User) // user is a function  normal function 
console.log(typeof alien1) // alien1 is a object... throughg the new keyword.. calling the user constructor
console.log(alien1)
alien1.greet()
console.log(alien2)
console.log(alien3)

 













