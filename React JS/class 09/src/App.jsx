import React from "react";  
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";    
import User from "./Screens/User";  
import Registration_form from "./Screens/Registration_form";    
import NotFound from "./Screens/NotFound";    

const App = () => {
  return (
    <>
      <Routes>
        
        {/* Basic Routing */}
        
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/form" element={<Registration_form />} />  
        <Route path="*" element={<NotFound />} />

        {/* Dynamic Routing */}  

        {/* 1) dynamic params */}

        <Route path="/user/:id" element={<User />} />

        {/* 2) query params */}

        <Route path="/user" element={<User />} />

        {/* Nested Routing */}

        <Route path="/dashboard" element={<Dashboarad />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/anncouncement" element={<Anncouncement />} />
          <Route path="/COntact" element={<COntact />} />
        </Route>
      </Routes>
      
    </>
  );
};

export default App;
