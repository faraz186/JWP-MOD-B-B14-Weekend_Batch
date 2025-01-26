import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.state);

  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About Page</h1>

      <button onClick={goBack}>Go back</button>

      <br />
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
