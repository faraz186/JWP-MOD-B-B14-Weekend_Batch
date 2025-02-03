import React from "react"; 
import { Route, Routes } from "react-router-dom";   
import Home from "./Screens/Home";  
import Create from "./Screens/Create";
import Update from "./Screens/Update"; 
import Delete from "./Screens/Delete"; 
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </>
  );
};

export default App;
