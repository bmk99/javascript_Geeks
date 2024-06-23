//  subString ................

// syntax....
// string.substring(Startindex, Endindex)


let name = "hello ha i like you "

let substring = name.substring(0,10)
console.log(substring)



//  trim................. 


let name2 = '          helloo ha ..........where are              '

let trimName = name2.trim()
console.log(name2)
console.log(trimName)

console.log(`trim start -removal of space at start --${name2.trimStart()}`)
console.log(`trim end -removal of space at end --${name2.trimEnd()}`)

let substring2 = name2.trim().substring(0,15)
console.log(`substring with trim ... ${substring2}`)


//  upperCase & lowerCase

let message = "jelloi ajfsdhjkaAAASFUEHIUEGjkadjkshg"
console.log(`toLowerCase ${message.toLowerCase()}`)
console.log(`toUpperCase ${message.toUpperCase()}`)




//  ----------------
