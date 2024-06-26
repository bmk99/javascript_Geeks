// first class function.
/**
 * if a function can be treated like a variabl then we can say it is first class functions..
 *1.like a variable can be passed as argument as function if do 
 *2.returned the function as the returned the variable
 *3.storing in a variable //
 * 
 * 
 */
// --1. function stored in a variable

 const meetInfo = function () {

    return "hell o ha"
 }

 const res1 = meetInfo() 
console.log(`res1 is ${res1}`) 

// --2 function passed as a argment 

function wrapper(name) {
    return "i am from wraper",name;
}
    
function main(innerFunc,name){
    console.log('entering the main ')
    let mess = innerFunc(name) 
    console.log(mess)
}

main(wrapper,"kiraha") 

//-- 3. function returned like a variable


function outer() {
    console.log(`enter the outer .. `)
    function inner() {
        console.log(`hello i am inner `)
        return "hey i am returned from inner"
    }
    return inner;
}

const outerRes = outer()
console.log(outerRes)
console.log(outerRes())
outerRes() 
outer()();