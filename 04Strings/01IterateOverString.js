let name = "hello world z not printed";

let count = 0;
for (let char of name) {
  console.log(char);

  if (char == "a") {
    count++;
  }
  if (char == "z") {
    break;
  }
}
console.log(`count of a in name ${count}`);
console.log(`4th position char at name si ' ${name[3]} '`);


let sentence = `hello ha i am waiting , can we talk z not printed......`

for(let i=0;i<sentence.length;i++){

    if(sentence[i]== 'z'){
        break;
    }
    console.log(`${i} positin at name is --' ${sentence[i]} '`)
    
}