
console.log(Object.getOwnPropertyNames(Array.prototype))

const rs  = Object.getOwnPropertyNames(Array.prototype).filter((prop)=>{
    console.log(Array.prototype[prop])
    return typeof Array.prototype[prop] !== 'function';

})
console.log(rs)

console.log(Array.prototype["length"])