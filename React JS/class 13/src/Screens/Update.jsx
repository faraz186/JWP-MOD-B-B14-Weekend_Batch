import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  // const [singleData, setSingleData] = useState({});

  const navigate = useNavigate();

  const [obj, setObj] = useState({
    userName: "",
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setObj(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateUser = () => {
    console.log(obj);

    axios
      .put(`http://localhost:3000/users/${id}`, obj)
      .then((res) => {
        alert("update user successfully...");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Update User
      </Typography>
      <br />

      <TextField
        onChange={(e) => {
          setObj({ ...obj, username: e.target.value });
        }}
        value={obj.username}
        fullWidth
      />
      <br />
      <br />

      <TextField
        onChange={(e) => {
          setObj({ ...obj, email: e.target.value });
        }}
        value={obj.email}
        fullWidth
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setObj({ ...obj, name: e.target.value });
        }}
        value={obj.name}
        fullWidth
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setObj({ ...obj, phone: e.target.value });
        }}
        value={obj.phone}
        fullWidth
      />
      <br />
      <br />

      <Button
        onClick={updateUser}
        color="success"
        fullWidth
        variant="contained"
        sx={{ marginBottom: 3 }}
      >
        Update
      </Button>
      <Button color="error" fullWidth variant="contained">
        Back
      </Button>
    </Paper>
  );
};

export default Update;
