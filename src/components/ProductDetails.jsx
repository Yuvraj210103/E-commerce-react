import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails(props) {

  props.myFun(false)

  const [Items, setItems] = useState([]);

  const updateItems = async () => {
    const url = `https://fakestoreapi.com/products/${from}`;
    let data = await fetch(url);
    let parseData = await data.json();

    setItems(parseData);
  };

  useEffect(() => {
    updateItems();
  }, []);

  const location = useLocation();
  const { from } = location.state;
  return (
    <div className=" lg:my-40 my:20 mx-8">
      <div
        className={`${
          props.mode === "dark" ? "text-white" : "text-black"
        } p-3 flex flex-col  transition-all   mt-20 mx-auto md:w-96 lg:w-full justify-center`}
      >
        <div className="product flex flex-col lg:flex-row">
          <div className="img lg:mx-4">
          <img
            src={Items.image}
            alt="Loading"
            className="mx-auto bg-white shadow-lg rounded-2xl p-8"
          />
          </div>
          <div className="desc lg:mx-4">
          <p className="title font-semibold text-3xl my-7">{Items.title}</p>
          <p className="my-3 box-border">{Items.description}</p>
          <p className="my-6  text-2xl">
            $ <b>{Items.price}</b>
          </p>
          <button className="bg-gray-500 text-white text-center  rounded-xl my-3 px-4 py-2 hover:scale-95">
            Buy Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
