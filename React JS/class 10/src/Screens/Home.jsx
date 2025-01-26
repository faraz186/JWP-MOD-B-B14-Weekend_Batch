import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  let obj = {
    name: "faraz",
    age: 24,
    email: "faraz@gmail.com",
    city: "karachi",
  };

  const changeScreen = () => {
    navigate("/about", { state: obj });
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={changeScreen}>Go to About Page</button>
    </div>
  );
};

export default Home;
