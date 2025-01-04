import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Navbar from "./components/Navbar";
import ResponsiveDrawer from "./components/Drawer";
import DashboardLayoutBasic from "./components/DashboardLayout";

const App = () => {
  return (
    // <>
    //   <h1>App Component</h1>
    //   <FaHome size={50} color="blue" />
    //   <br />
    //   <br />
    //   <TextField
    //     id="outlined-basic"
    //     label="Email address or phone"
    //     variant="standard"
    //   />

    //   <br />
    //   <br />
    //   <Button variant="danger">Submit</Button>
    // </>
    <>
      {/* <Navbar /> */}
      {/* <ResponsiveDrawer /> */}
      <DashboardLayoutBasic />
    </>
  );
};

export default App;
