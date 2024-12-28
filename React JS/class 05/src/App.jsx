import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Header from "./Components/Navbar/Navbar";
import Data from "./data";
import { CiHome } from "react-icons/ci";
import { IoLogoGoogle } from "react-icons/io5";
import TextField from "@mui/material/TextField";

const App = () => {
  console.log(Data);

  return (
    <>
      <Header />
      <h3>App Component</h3>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <br />
      <br />
      
      {/* <CiHome />
      <IoLogoGoogle /> */}

      <Button variant="warning">Submit</Button>
    </>
  );
};

export default App;
