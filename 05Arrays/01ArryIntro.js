let names = ['kiran',"kira","bannn","ha","sa"] // array is `non primitive` data type
//  array starting with index with 0

console.log(`by calling the ${names[2]}`)
console.log(`normal for loop through condition `)
 

// ---for calling the names from teh array 
for(let i = 0;i<names.length;i++){
    console.log(i) // index number 
    console.log(names[i])// by calling from the index number
}

// ----forEach
names.forEach(element => {
    console.log(element)
    
});

// ----when we don't want any index then at that time we want to print only elements
// for of
console.log(`-----------elemetns from for of-----`)

for(let name of names){
    console.log(name)
}

// ---- when we want only index of the array 
// for in 
console.log(`-------------------index from for in--`)
for(let index in names){
    console.log(`index at ${index} is ${names[index]}`)
}


// -----by using object methods..





