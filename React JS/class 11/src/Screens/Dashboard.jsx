import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let [counter, setCounter] = useState(0);

  const clickFunc = () => {
    setCounter(++counter);
  };

  const func = () => {
    console.log("function call..");
  };

  const clickFunc2 = () => {
    console.log("clickfunc2 ");
  };

  useEffect(() => {
    func();
  }, [counter]);

  // ------------------------API INTEGRATION---------------------------------

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      });
  };

  const navigate = useNavigate();

  console.log(userData);

  return (
    <div>
      <h1>DASHBOARD PAGE </h1>
      <div style={{ border: "1px solid black", width: 250, marginBottom: 10 }}>
        {userData &&
          userData.map((e, i) => {
            return (
              <div>
                <h1>{e.name}</h1>
                <h2>{e.username}</h2>
                <h3>{e.phone}</h3>
                <h6>{e.email}</h6>
                <button
                  onClick={() => {
                    navigate(`/users/${e.id}`);
                  }}
                >
                  View
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
