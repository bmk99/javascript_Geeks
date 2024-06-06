// function  are used for reusing like how many times we can call that many times it can print ....
function sum(min,max){
    let add =0;
    for(let i = min;i<max;i++){
        add += i
    
    }
    return add
}

console.log(sum(10,20))

function call(name,city = "no city")// parameters from the call
{
    console.log(`my name is ${name}`)
    console.log(`my city is ${city}`)
    console.log(`-------------`)
}
call("kiraha","hyderabad")
call("aha","")
call("mimbai","maharastra")

// ------------------


// function expression : when function was declared with the variable .

// anonymous function  : when function doesn't have the name ... 
let anonymousFunction = function () {
    console.log("i am declared by expression fucntion ")
}

anonymousFunction()

// -named function expression : when declared with variable and having a name in the fucntion 

let func = function demo(){
    console.log("again called....")
    console.log(typeof demo)
}
// demo() // error: we have call by func only i/e demo was assigned to func
// we can't acces the name demo() function 
func()




// return about...........
function returned(n,a){
    return n * a 
     console.log(first) // after return nothing can execute..return defines end of the function 

}
returned(12,12) // doesn't print anything .....  when function was returning something..it should store in some valuable

console.log(returned(12,12))