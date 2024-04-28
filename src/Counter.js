import React, { useState } from "react";
import { themeContext } from "./App";
import { useContext } from "react";

const Counter = ({initialCount}) => {
    console.log(initialCount);
    const [count, setCount] = useState(initialCount);

    const style = useContext(themeContext);
    console.log(style);
  return (
    <div
      style={style}>
      <h1>Counter</h1>
      <div >
        <button onClick={() => setCount(prevCount => prevCount-1) }>➖</button>
        <span> {count} </span>
        <button onClick={() => setCount(prevCount => prevCount+1)}>➕</button>
      </div>
    </div>
  );
};

export default Counter;
