import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
  const [query_param, setQuery_param] = useSearchParams();

  console.log(query_param.get("name"));
  console.log(query_param.get("age"));
  console.log(query_param.get("city"));

  // const { id } = useParams();

  // console.log(id);

  return (
    <div>
      {/* <h1>{id}</h1> */}
      <h3>User Page</h3>
    </div>
  );
};

export default User;
