import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, delCounter } from "../store/slices/counterSlice";
import axios from "axios";
import { fetchData } from "../store/slices/ProductSlice";
import Cards from "../component/Cards";
import Navbar from "../component/Navbar";

const Home = () => {
  const { isloading, isError, allProducts } = useSelector(
    (state) => state.productReducer
  );
  console.log(isloading, isError, allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Navbar />

      {isloading ? (
        <h1>Loading...</h1>
      ) : (
        allProducts.map((e, i) => {
          return (
            <div style={{ marginTop: 30 }}>
              <Cards key={i} title={e.title} desc={e.desc} imgSrc={e.image} product={e} />
            </div>
          );
        })
      )}
    </>
  );
};

export default Home;
