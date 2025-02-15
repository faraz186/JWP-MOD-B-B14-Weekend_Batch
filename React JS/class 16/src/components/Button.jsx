import React from "react";
import { addCounter, delCounter } from "../store/slices/CounterSlice";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch(addCounter());
  };

  const Decrement = () => {
    dispatch(delCounter());
  };
  return (
    <div>
      <button onClick={Increment}>Add</button>

      <button onClick={Decrement}>Del</button>
    </div>
  );
};

export default Button;
