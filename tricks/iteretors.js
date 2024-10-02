function* genertor() {
    yield 1 
    yield 2 
    yield 3 
    return {value: "hello"}
}
const gen = genertor() 
console.log(gen.next().done)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.return())


// -- iterator 
const array = [1,2,3]
const iterator = array[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())