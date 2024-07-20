
//  for finding the properties and methods in a string....


console.log( Object.getOwnPropertyNames(String.prototype));
    
let stringMethods = Object.getOwnPropertyNames(String.prototype).filter(function(prop) {
    return typeof String.prototype[prop] === 'function';
});

let stringProperties = Object.getOwnPropertyNames(String.prototype).filter(function(prop) {
    return typeof String.prototype[prop] !== 'function';
});


console.log("stringMethods",stringMethods);
// only length is not the method for the strings.
console.log("stringProperties",stringProperties)
// ---------------

