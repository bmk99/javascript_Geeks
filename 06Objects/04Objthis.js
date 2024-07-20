//  this js file imported to index.html .. run the html file and check in the broweser console for better output/...
const obj ={
    name :"kiraha",
    info:function() {
        console.log(`calling the name --`,obj.name)
        console.log(`normally calling `,obj) // by obj
        console.log(`callin the obj by using this`, this) // here this refers to the obj  so whenever inside the method this keywod represents the current obj
        console.log(`calling by using the this--- `,this.name)

    }
}
obj.info()


// in a regular function this refers to the global keyword =- window 
function meetInfo() {

    console.log(`in normal function this represents global`,this) // 
}
meetInfo()


// --------------
// cases
//  = -----------------------case1 -------------=
// case - 1 - don't use arrow functions in the object method .. becaz it represent the global this key word .....
console.log(`
    case - 1 -------------`)

const case1={
    name :"kiraha",
    meetNormal :function () {
        console.log(`using normal function inside the obj , - this represents the current object `,this) //| normal function represents the object

    },
    meetArrow :() =>{
        console.log(`using the arrow  function inside the obj - this represents global`,this) // arrow function represents the glboal this 
    }
}

case1.meetNormal() 
case1.meetArrow() 


// =-------------------case 2 --------------------------=
console.log(`
    case 2 ------------`)
// when we write the function inside the method i.e it refered as nested function...so  we can't acces the current obj by using this keyword inside that nested fucntiion.
const case2 ={
    name :"kiraha",
    displayInfo:function () {
        console.log(` display  method inside the obj `, this)
       function showMessage() {
        console.log(`showMessage function inside  the display method,this represents global`,this)
       }
       showMessage()
    }
}
case2.displayInfo()



