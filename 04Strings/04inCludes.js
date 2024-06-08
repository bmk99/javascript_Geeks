//  to check whether the substring provided present or not .......

// syntax for find
// string.includes(searchvalue, start)
// 

let message2 = "hello i felt like no.. to ha"
// in the includes the substring exactly matched in the strign we comparing....
console.log(message2.includes("no"))
console.log(message2.indexOf("no"))
console.log(message2.includes("no",19)) // searching the no after 19 th posiotno
console.log(message2.includes("yes")) // | not presetnt 


// If the computed index(starting index) i.e the position from which the search will begin is less than 0, the entire array will be searched. 

var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o",-2);
console.log(`check whens serached - given.. ${check}`);

// --------------------------------------


const message= "hello ha "
let vowels = 'aeiou'
let flag = true;
const vowelsPresent = (m) => {
    for(let char of m ){
        if(vowels.includes(char)){
            flag = true
            break;
        }else{
            flag = false
        }
        
    }
}
let res = flag ? "vowels are present" :"not present "
console.log(`res is ${res}`)



