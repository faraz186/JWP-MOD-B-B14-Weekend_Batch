import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    userName: "",
    name: "",
    email: "",
    phone: "",
  });

  //   Axios methods

  // get
  // post
  // put
  // delete

  const CreateUser = () => {
    // console.log(userDetails);

    axios
      .post("http://localhost:3000/users", userDetails)
      .then((res) => {
        console.log("user create successfully..");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Create User
      </Typography>
      <br />

      <TextField
        onChange={(e) => {
          setUserDetails({ ...userDetails, username: e.target.value });
        }}
        label="Enter Username"
        fullWidth
      />
      <br />
      <br />

      <TextField
        onChange={(e) => {
          setUserDetails({ ...userDetails, email: e.target.value });
        }}
        label="Enter Email"
        fullWidth
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setUserDetails({ ...userDetails, name: e.target.value });
        }}
        label="Enter Name"
        fullWidth
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setUserDetails({ ...userDetails, phone: e.target.value });
        }}
        label="Enter Phone"
        fullWidth
      />
      <br />
      <br />

      <Button
        onClick={CreateUser}
        color="success"
        fullWidth
        variant="contained"
        sx={{ marginBottom: 3 }}
      >
        Create
      </Button>
      <Button color="error" fullWidth variant="contained">
        Back
      </Button>
    </Paper>
  );
};

export default Create;
