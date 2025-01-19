import React from "react";

const Login = ({ toggleFunc }) => {
  return (
    <div>
      <h1>Login Form</h1>

      <a href="#" onClick={toggleFunc}>
        Create an account..
      </a>
    </div>
  );
};

export default Login;
