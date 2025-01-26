import React from "react";
import { ProductData } from "../data";
import Cards from "../components/Cards";

const Products = () => {
  console.log(ProductData);
  return (
    <div>
      <h1>Products page</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: "20px",
          columnGap: "50px",
        }}
      >
        {ProductData &&
          ProductData.map((e, i) => {
            return (
              <Cards
                key={i}
                cardId={e.id}
                title={e.title}
                desc={e.description}
                imgSrc={e.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
