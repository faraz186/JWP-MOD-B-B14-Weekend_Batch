import React from "react";
import { Route, Routes } from "react-router-dom";                   
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import Dashboard from "./Screens/Dashboard";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
