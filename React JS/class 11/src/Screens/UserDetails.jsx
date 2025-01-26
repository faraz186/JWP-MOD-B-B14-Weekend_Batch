import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);

  //   const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    getSingleData();
  }, []);

  const getSingleData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>UserDetails</h1>
    </div>
  );
};

export default UserDetails;
