import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../data";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const filterData = ProductData.filter((e, i) => {
    return id == e.id;
  });

  console.log(filterData);

  return (
    <>
      <h1>SingleProduct Page</h1>

      {filterData &&
        filterData.map((e, i) => {
          return (
            <div>
              <img width={200} src={e.image} alt="" />
              <h1>{e.title}</h1>
              <h3>{e.category}</h3>
              <p>{e.description}</p>
            </div>
          );
        })}
    </>
  );
};

export default SingleProduct;
