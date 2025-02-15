import React from "react";
import { useSelector } from "react-redux";

const Headers = () => {
  const { counterVal } = useSelector((state) => state.faraz);

  console.log("counter", counterVal);

  return (
    <div>
      <h1>Counter {counterVal}</h1>
    </div>
  );
};

export default Headers;
