// "asking from the terminal "
// package we have installed -- npm i readline-sync

const readlineSync = require("readline-sync")

const name =readlineSync.question("What is your name?")
console.log(`my name is ${name}`)

const age = readlineSync.question("what is your age ? "
)
console.log(`i am ${age}`)
console.log(typeof age ) // it is string 

const add = 20+ Number(age) // we not convert into the number than it will be in string only 

console.log(add)


console.log("-----------------")

// ------------------------
var rl =readlineSync.createInterface(process.stdin, process.stdout)

r1.question("what is your city ",(city)=> console.log(`my city is ${city}`))

//| for runnign this we have to use open terminal 
//| node file-name