import React from "react";

const Input = ({ label, placeholder, type, onchangeEvent }) => {
  return (
    <>
      <label>{label}</label>
      <input
        // value={value}
        type={type}
        placeholder={placeholder}
        onChange={onchangeEvent}
      />
    </>
  );
};

export default Input;
