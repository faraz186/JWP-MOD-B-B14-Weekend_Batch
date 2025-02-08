import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import DbScreen from "./components/DbScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/db" element={<DbScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
