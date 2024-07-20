//  to find he acii code values ... and from the acii code to characters;;;;


// ASCII (American Standard Code for Information Interchange) is a standard character encoding used in telecommunication. The ASCII pronounced ‘ask-ee’, is strictly a seven-bit code based on the English alphabet. ASCII codes are used to represent alphanumeric data.

//128 characters. it currently defines 95 printable characters including 26 upper case letters (A to Z), 26 lower case letters, 10 numerals (0 to 9), and 33 special characters including mathematical symbols, punctuation marks, and space characters.


// In total, there are 256 ASCII characters, and can be broadly divided into three categories:

// ASCII control characters (0-31 and 127)
// ASCII printable characters (32-126) (most commonly referred to)
// Extended ASCII characters (128-255)


let message = "abcdefghijklmnopqrstuvwxyz "
let message2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let message3 = "0123456789"

let index = 0
let index2  = 2
let index3 = 3


let char = message.charAt(index)
let char2 = message.charAt(index2)
let char3 = message.charAt(index3)

console.log(`char is ${char}`)
console.log(`char2 is ${char2}`)
console.log(`char3 is ${char3}`)
// to find the ascii value for a code 
console.log(`--------`)

let asciiCode = message.charCodeAt(index)
let asciiCode2 = message2.charCodeAt(index2)
let asciiCode3 = message3.charCodeAt(index3)

console.log(`--------`)

console.log(`ascii code fo ${asciiCode}`)
console.log(`ascii code2 fo ${asciiCode2}`)
console.log(`ascii code3 fo ${asciiCode}`)



console.log(`asciiCode of char '${char}' is ${asciiCode} and it's value is `)
console.log(`asciiCode of char '${char2}' is ${asciiCode2}`)
console.log(`asciiCode of char '${char3}' is ${asciiCode3}`)


// ..
let character = "Asdfas"
let number = 65
console.log(`the ascci value of ${number} is ${String.fromCharCode(97)}`)
console.log(`the accii code for char ${character} is ${character.charCodeAt()}`)
console.log(`the accii code for char ${character} is ${"Z".charCodeAt()}`)



