import React, { useState } from "react";

const Counter = ({initialCount}) => {
    console.log(initialCount);
    const [count, setCount] = useState(initialCount);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <h1>Counter</h1>
      <div>
        <button onClick={() => setCount(prevCount => prevCount-1) }>➖</button>
        <span> {count} </span>
        <button onClick={() => setCount(prevCount => prevCount+1)}>➕</button>
      </div>
    </div>
  );
};

export default Counter;
