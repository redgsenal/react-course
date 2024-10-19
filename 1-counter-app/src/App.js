import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  // function addNumber() {}

  // function subtractNumber() {}

  // const addNumber = () => {
  //   setNumber(number + 1000);
  // };

  // const subtractNumber = () => {
  //   setNumber(number - 1000);
  // };

  const buttonIncrementClick = () => {
    console.log('hello there ++');
    setNumber(number + 1);
  };

  const buttonDecrementClick = () => {
    console.log('hello there --');
    setNumber(number - 1);
  };

  return (
    <div className="container">
      <ul>
        <li>
          <button onClick={buttonIncrementClick}>Increment by 1</button>
        </li>
        <li>{number}</li>
        <li>
          <button onClick={buttonDecrementClick}>Subtract</button>
        </li>
      </ul>
    </div>
  );
}
