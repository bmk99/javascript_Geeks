//  Comparison Operators 
//  >     (greater than)
//  <     (less than )
//  >=   (greater than or equal to )
//  <=    (less than or equal to ) 
//  ==   (equal )
//  !=   ( not equal )
//  === (Strict equal )
//  !== ( strict not eqaul)


console.log("0------------")
//  comparing the numbers 

console.log(2029 > 2023)

console.log(2029 < 2023)

console.log(2029 == 2029)


console.log(2029 != 2023)


console.log(2029 <= 2029)

console.log(2029 >= 2029)


console.log("1-------------------")
//  comparing the string 
// strigns are compared character by character based on the ascii  value 

console.log("a" > "b")

console.log("a" < "b")

console.log("ha" > "ha")

console.log("ha" == "ha")

console.log("haki" > "ha") // first two letters are same then after wards -ki- are extra with ha it is greater than ha

console.log("haki" < "ha")  //


console.log("2---------------")
// compairng the numbers but with strings 

console.log("0" == 0)
console.log("2 " >= 2)

//  even though it is string but it will convert impicityly by (type cohersion) into a number then it will check .. to avoid this misunderstanding we have  ~Strict equality operator~

console.log("3----------")
// ** strict equality operator ** //  / === \
//  it will check the type of the value then it will proceed 


console.log("0" === 0)
console.log("01" !== 1)

//  error we don't have the comparing stric operator


console.log("4---------")
// comparing with the null 
// while compiling  null is converting into 0 
console.log(null > 0 )

console.log(null < 1)


console.log(null  == 0)

console.log(null === 0 )

console.log(null == undefined)

