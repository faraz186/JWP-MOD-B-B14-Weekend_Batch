import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button className="btn">{props.name}</button>
    </div>
  );
};
