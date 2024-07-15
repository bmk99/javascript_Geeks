//  global variable ,local variable
var x = 950; // glovla variable .. access throught the file
let k = 5900; // global varainbale
debugger;
function greet() {
  console.log({ k });
  console.log({ x });
  x = 50;
  console.log({ x });
  var y = 50; // local varialble.. local scope..declared inside the function .. so only access in the function
}
greet();
console.log({ x });

// console.log({y}) // error = y is defined inside the function scope

function bye() {
  // console.log({y}) // / not global scope
  console.log({ x });
}
bye();

// -- global scope and local scope ..

{
  var s = 5090;
  let i = 233;
  let r = 23235;
}
console.log(s); // var is global scope...
// console.log(i)// error = not defined becaz let is block scope
// console.log(r) // error - not defined..


import React, { useState } from 'react';

const FontSizeAdjuster = () => {
  const [fontSize, setFontSize] = useState(16); 
  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 2);
  };
  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>
        This is a paragraph of text. Use the buttons below to adjust the font size.
      </p>
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <button onClick={decreaseFontSize}>Decrease Font Size</button>
    </div>
  );
};

export default FontSizeAdjuster;

// =--------------
import React, { useState } from 'react';
const EveryThirdCharacter = () => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const getEveryThirdCharacter = (text) => {
    return text.split('').filter((char, index) => (index + 1) % 3 === 0).join('');
  };
  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Type here..."
      />
      <div>
        <h3>Every third character:</h3>
        <p>{getEveryThirdCharacter(text)}</p>
      </div>
    </div>
  );
};

export default EveryThirdCharacter;

