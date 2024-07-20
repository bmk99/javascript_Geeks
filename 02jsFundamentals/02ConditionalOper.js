

//  Consditional operator 
//  if , else , else if
const readlinesync = require("readline-sync")
const prompt = require("prompt")
let number = prompt("Enter the number")

// While (typeof(Number) !== (Number)) {

//     number = Number(readlinesync.question("Enter the number again"))
// };


const reamainderAfterDivisionThree = number % 3
const reamainderAfterDivisionFive = number % 5
const reamainderAfterDivisionSeven= number % 7




// if and else or else if are the defensive condtions 
// ----------------------
// if(reamainderAfterDivisionThree == 0 ){
//     console.log("aaaaaaaaa")
// }else{
//     console.log("bbbbbbbbb")
// }
// _____


// in case if a number both divisible by 3 and 5 then how that'why in this if and else if one condition is true then 
// once if statement is true it would'nt see the other statements 

// to make that possible we need to write like this 

// --------
// if(reamainderAfterDivisionThree == 0){
//     console.log("aaaaaaaa")
// }
// if(reamainderAfterDivisionFive == 0){
//     console.log("bbbbbbbbbb")
// }
// _________
// *************or **************************

// --------------------------
if(reamainderAfterDivisionThree == 0 && reamainderAfterDivisionFive == 0){
    console.log("aaaaaaaaaaaa")
    console.log("bbbbbbbbbbbbb")
}else if(reamainderAfterDivisionThree ==0){
    console.log("aaaaaaaaaa")
}else if(reamainderAfterDivisionFive == 0){
    console.log("bbbbbbbbbbbbbbbb")
}else{
    console.log("nothing............")
}
// _____________