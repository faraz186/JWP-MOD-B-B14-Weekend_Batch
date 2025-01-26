import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Dashboard from "./Screens/Dashboard";
import Profile from "./Screens/Profile";
import Contact from "./Screens/Contact";
import Settings from "./Screens/Settings";
import UserDetails from "./Screens/UserDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/dashboard/*">
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>

    // Basic Routing
    // nested Routing
    // Dynamic Routing
    // protected routing
  );
};

export default App;
