import React, { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(() => {
    console.log("hi");
  }, [num1]);

  return (
    <div>
      <h1 className="text-white">{num1}</h1>
      <h1 className="text-white">{num2}</h1>
      <button
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
        className="bg-white"
        onMouseEnter={() => {
          setNum1(num1 + 1);
        }}
      >
        Set Value
      </button>
    </div>
  );
};

export default App;

//1. Mounting - whenever state(num var) changes along with useEffect runs
// To avoid this just put the empty dependency