


//  for finding the index of the char in a string

//  --- str.indexOf(searchValue , index)

//  search value is the value searchign at the given string.. 
// index -- from which position it should started ...



//  it will print the index of the letter in the text if found                               , else if it doesn't found  return -1 .. represents not present

let sentence ="starship leads to mars someday definetly"
console.log("hello hea".indexOf("e"))
console.log("first".indexOf("z"))
console.log(sentence.indexOf("@"))
console.log(`mars position from starting ...${sentence.indexOf("mars")}`)
console.log(`mars position after 18 index.. ${sentence.indexOf("mars",19)}`)//  mars position start at 


// -- 

const charFind = (text,char) =>{

console.log(text.indexOf(char))

    return  text.indexOf(char) != -1 ? `found` : "not found"
}

const res = charFind("hello ha i quit seeing","h")
console.log(res)





// 
// lto find the index of the word in the given sentence 
let sentence1 = "hello ha i need to avoid looking"
console.log(sentence1.indexOf("ha"))// ha starting at 6 from 0 