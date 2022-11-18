import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

function Footer(props) {
  return (
    <div
      className={`${props.mode === "dark" ? "bg-gray-500" : "bg-gray-100"} p-6`}
    >
      <h1 className="lg:hidden lg:text-2xl text-xl font-semibold mb-2">
        {" "}
        Follow Us on{" "}
      </h1>
      <div
        className={`flex ${
          props.mode === "dark" ? "bg-gray-400 text-black" : "bg-gray-300 "
        } py-3`}
      >
        <h1 className="text-lg font-semibold hidden lg:inline-block px-3  lg:text-xl ">
          Follow us on
        </h1>
        <div className="lg:ml-auto grid grid-cols-4 gap-x-16 lg:gap-x-0 px-2">
          <AiFillFacebook className="mx-auto lg:mx-5" size={24} />
          <AiOutlineInstagram className="mx-auto lg:mx-5" size={24} />
          <AiFillTwitterCircle className="mx-auto lg:mx-5" size={24} />
          <AiFillGithub className="mx-auto lg:mx-5" size={24} />
        </div>
      </div>
      <div className="grid grid-cols-1 justify-center   sm:text-left gap-x-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 my-6  font-light ">
        <div className="my-2 text-lg sm:mx-auto">
          <h1 className="text-xl font-semibold my-2">My Account</h1>
          <h1>Products</h1>
          <h1>Category</h1>
          <h1>Men</h1>
          <h1>Women</h1>
        </div>
        <div className="my-2 text-lg sm:mx-auto">
          <h1 className="text-xl font-semibold my-2">We are ShopEasy</h1>
          <h1>Pricing</h1>
          <h1>Cart</h1>
          <h1>Collection</h1>
          <h1>Buy now</h1>
        </div>
        <div className="my-2 text-lg sm:mx-auto">
          <h1 className="text-xl font-semibold my-2">Customer Care</h1>
          <h1>Gopu@gmail.com</h1>
          <h1>+92 8282828828</h1>
          <h1>+01 234 789 01</h1>
          <h1>+91 9383736454</h1>
        </div>
        <div className="my-2 text-lg sm:mx-auto">
          <h1 className="text-xl font-semibold my-2">Products</h1>
          <h1>Fashion</h1>
          <h1>Electronics</h1>
          <h1>Jwellery</h1>
          <h1>Households</h1>
        </div>
      </div>
      <div
        className={`${
          props.mode === "dark" ? "bg-gray-400 text-black" : "bg-gray-300 "
        } text-center py-3`}
      >
        <h1>
          &copy; 2022 Copyright: <b>ShopEasy</b> <br />
          &reg; All right reserved{" "}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
