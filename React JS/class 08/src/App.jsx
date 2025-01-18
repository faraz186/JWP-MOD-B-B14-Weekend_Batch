import React from "react";      
import Registration_form from "./Screens/Registration_form";    
import Home from "./Screens/Home";        
import About from "./Screens/About";      
import User from "./Screens/User";      
import { Route, Routes } from "react-router-dom";  
import Navbar from "./components/Navbar/Navbar";
import "./App.css"; 
  
const App = () => {
  return (  
    <>   
      <Navbar />  
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />         
        <Route path="/user" element={<User />} />
        <Route path="/register_form" element={<Registration_form />} />
      </Routes>  
    </>
  );
};

export default App;
