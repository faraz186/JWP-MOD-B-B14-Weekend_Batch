import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";                  
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
