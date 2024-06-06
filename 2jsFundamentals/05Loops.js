// for looop \\

// for(initailization(optional);condition , increment(optional)){
//  statements ................
//  statements................
// }
// for loop will excute up to condition is false .........

for(let i=1;i<=7;i++){
    console.log(`i value is `, i)
}

// like this when i <+ 7 then it stops executing 

//  error start
// let i = 2
// for(;i<=2;){
//     console.log("it stop ")

// }
//  her for loop will never stop because condition never beocme false .... it stays always true

// error  end

// the above one can be modify as.............
let i=2
for(;i<=1;){
    console.log("it stop ")

}
//  at the starting the conditon itself false..........
console.log('after for looop ........ ')

// --- in case of string also 

let firstName = "kiraha........haaaaaaaa"
console.log(firstName[0])
console.log(firstName[1])
console.log('----------------')

for(let i=0;i<firstName.length;i++){
    console.log(firstName[i])
    // it will print the characters of the firstName by calling their index....
}


// ___________________
// ------------------ nested for loops ----------------
// inner loop , outer loop ............
/*
i * j = ij 
1 * 1 = 2
1 * 2 = 2
1 * 3 = 3 
1 * 4 = 4 
.
.
.

2 * 1 = 1
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8 
2 * 5 = 10 
...
..
...
for doing the multiplication we need nested loop ,...... 
one value is same that becomes outer loop and for that same value having different other values becomes the inner loop 
after reaching the limit set by inner looop now outer loop will channge.........
 */


for(let i =1;i<=7;i++){
    console.log(`i value is  ${i}`)
    for(let j =1;j<=4;j++){
     let product = i * j
     console.log(`${i}  * ${j} = ${product}` )
    }
}


//  outer  loop becomes constant for the inner loop........ 
// inner looop depends on the outer loop then outer loop depends on the inner value....


//  while loop 
/**
 *  while(condition){
 *      // statenments 
 *      // statements 
 *  } 
 */
let j = 0
while(j < 10){
    console.log(j)
    j++;

}
console.log(`up to 9 only it will print....`)

//  unto condition false it will execute ---------------
console.log(`-------------`)


let k = 10
while(k<10){
    console.log(k)
}
console.log(`------while loop doesn't print 10-----------`)

do{
    console.log(`k value is ${k}`)
}while(k<10)
 console.log(`do while loop print the 10 because it will print first then check the condition in the while `)
