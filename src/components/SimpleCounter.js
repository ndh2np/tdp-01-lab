import React, { useState } from "react";

const SimpleCounter = ({ count = 0, setCount }) => {
  //const [number, setNumber] = useState(initialValue);

  const change = () => {
    setCount(count + 10);
  };

  return (
    <div id="counter-box">
      <div
        style={{
          border: "1px solid black",
          width: "50px",
          height: "50px",
          margin: "50px",
          padding: "30px",
        }}
      >
        {count}
      </div>
      <button
        style={{
          margin: "50px",
        }}
        onClick={change}
      >
        +10
      </button>
    </div>
  );
};

export default SimpleCounter;
