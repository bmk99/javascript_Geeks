
console.log(Object.getOwnPropertyNames(Array.prototype))

const rs  = Object.getOwnPropertyNames(Array.prototype).filter((prop)=>{
    console.log(Array.prototype[prop])
    return typeof Array.prototype[prop] !== 'function';

})
console.log(rs)

console.log(Array.prototype["length"])



// -------------------adding properties to the array 
//  after adding the properties to the arry , the array length wouldn't affect ..and arrya is a object..

const arr1 = [1,2,3,4,5,6,7]
arr1.greeting = {name: "hello"}
console.log(arr1)
console.log(arr1.greeting)
console.log(arr1.length)

console.log(arr1["greeting"])
console.log(Object.keys(arr1))
console.log(Object.values(arr1))
console.log(Object.entries(arr1))

