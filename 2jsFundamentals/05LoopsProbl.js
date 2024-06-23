/*
*for printing the patterns......
*
**
***
****
*****

 */
const readlinesync = require('readline-sync')

const star = "*"
// for(let i=1; i<=5;i++){
//     console.log(i)
//     console.log("*".repeat(i))
// }
let count =0
for(let i=6;i>10,i--,i>2&&i<10,i++,i>7;){
    console.log(i)
    count++
}
console.log(`coutn ${count}`)


/**
 * Using a comma instead of a semicolon in the for loop's update statement is a subtle syntax issue that might lead to unexpected behavior or errors. However, in JavaScript, the comma operator evaluates both of its operands and returns the value of the second operand
 * 
 * 
 * The condition i > 0, i-- is evaluated as a comma-separated expression.
The comma operator will evaluate i > 0 and i-- but the value of the entire expression will be i--.
This is likely causing unintended behavior, as the loop may not be terminating as expected.
 */


/* find the even numbers betweeen 0 to 100 
*/

let arr =[]
let e =''
let o =""
for(let i = 0;i<101;i++){
    if(i %2 ==0 ){
        // console.log(i,)
        e += `${i},  `
        arr.push(i)
    }
    if(i %2 != 0){
        o += `${i} `

    }

}
console.log(e)
console.log(arr)
console.log(`odd ------${o}`)




//  for finding the properties and methods in a string....


    console.log(Object.getOwnPropertyNames(String.prototype));
    
    let stringMethods = Object.getOwnPropertyNames(String.prototype).filter(function(prop) {
        return typeof String.prototype[prop] === 'function';
    });
    
    console.log(stringMethods);
// ---------------



//  for finding the charcters either present in or not 

   
   
const myName = "hasen where hell "
const vowels = 'aeiou'
//  includes will check line wise .. it may in the middle of the sentence including space also becaz it has the acii values ,all acii values are considered while checking...
console.log(myName.includes("reh"))// false
console.log(myName.includes("ell")) // true
for(let i=0;i<myName.length;i++){
    if(vowels.includes(myName[i])){
        console.log(myName[i])
    }
}




//  while problem .....

let number = 12
while (number <=50){
    number = readlinesync.question("Enter the number grater than 100..")
}
console.log(`number ..is ${number}`)



