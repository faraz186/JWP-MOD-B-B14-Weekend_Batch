import React from "react";

const Signup = ({ toggleFunc }) => {
  return (
    <div>
      <h1>SignUp Form</h1>

      <a href="#" onClick={toggleFunc}>
        Login here...
      </a>
    </div>
  );
};

export default Signup;
