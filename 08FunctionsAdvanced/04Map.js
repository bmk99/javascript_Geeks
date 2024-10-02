//  maps also higher order function .. it return a new array

const arr1 = [6,7,8,9,10]
function squareMin(num) {
    return num ** 2
}
function calculatePower(wrapper,arr) {
    let tempArr = []
    for (let num of arr){
        tempArr.push(wrapper(num))
    }
    return tempArr
}

const squareMinRes = calculatePower(squareMin,arr1) 
console.log(`squareMinRes through the higher order`,squareMinRes)



// --------------------------


//  simply by using the map...--------

const arr2= [1,2,3,4,5,]

function squareMap(num,index,array) {
    console.log(num)
    console.log(index)
    console.log(thisArg.num)
  return num ** 2;
}

const res = arr2.map(squareMap);
console.log(`through the map .. passing `);

const res2 = arr2.map(num => num **2)
console.log(res2)


