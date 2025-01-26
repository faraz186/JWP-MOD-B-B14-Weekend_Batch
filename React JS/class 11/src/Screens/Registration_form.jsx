import React, { useState } from "react";
import Input from "../components/Input";
import UserTable from "../components/Table";

const Registration_form = () => {
  //   let [userName, setUsername] = useState("");
  //   let [userEmail, setUserEmail] = useState("");
  //   let [userPassword, setUserPassword] = useState("");

  let [userObj, setUserObj] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  let [userArr, setUserArr] = useState([]);

  const getInputValue = () => {
    // console.log(userObj);
    setUserArr([...userArr, userObj]);
    console.log(userArr);
  };

  return (
    <div>
      <h1>Registration_form Component</h1>

      <Input
        onchangeEvent={(e) =>
          setUserObj({ ...userObj, userName: e.target.value })
        }
        placeholder="Enter name"
        type="text"
        label="Enter name"
      />

      <br />
      <br />

      <Input
        onchangeEvent={(e) =>
          setUserObj({ ...userObj, userEmail: e.target.value })
        }
        placeholder="Enter email"
        type="email"
        label="Enter email"
      />

      <br />
      <br />

      <Input
        onchangeEvent={(e) =>
          setUserObj({ ...userObj, userPassword: e.target.value })
        }
        placeholder="Enter password"
        type="password"
        label="Enter password"
      />

      <br />
      <br />

      <button onClick={getInputValue}>Get Value</button>

      <UserTable data={userArr} />
    </div>
  );
};

export default Registration_form;
