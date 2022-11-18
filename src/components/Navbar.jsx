import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  
} from "react-icons/ai";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";



function Navbar(props) {

  const {  totalUniqueItems} =
    useCart();

  const [Icon, setIcon] = useState(<AiOutlineMenu size={25} />);
  const [Margin, setMargin] = useState("-mt-40");


  const responsiveMenu = () => {
    if (Margin === "-mt-40") {
      setMargin("mt-0");
      setIcon(<AiOutlineClose size={25} />);
    } else {
      setMargin("-mt-40");
      setIcon(<AiOutlineMenu size={25} />);
    }
  };


  return (
    <div className="">
      <nav className="flex flex-col fixed  top-0 min-w-full shadow-md z-50">
        <ul
          className={`flex flex-row p-3  z-30 ${
            props.mode === "dark" ? "text-white bg-gray-500" : "bg-gray-200"
          }`}
        >
          <label htmlFor="" className="mx-3">
            <img src={logo} alt="" className="w-10 h-9" />
          </label>

          <ul className="hidden  sm:flex ml-8 mt-1 text-lg">
            <Link to="/" className="mx-6">
              <li>Home </li>
            </Link>
            <Link to="/collection" className="mx-6">
              <li>Collection </li>
            </Link>
            <Link to="/login" className="mx-6">
              <li>My-Profile </li>
            </Link>
          </ul>

          
            <li className="ml-auto mx-6 mt-2 relative cursor-pointer">
              <Link to="/cart">
            <AiOutlineShoppingCart size={25} />
            <span className="absolute -top-2 ml-5 z-10 bg-orange-300 rounded-full px-1">
              {totalUniqueItems}
            </span>
            </Link>
            </li>
          

          <li className="mx-2 mt-2 cursor-pointer" onClick={props.toggleMode}>
            {props.mode === "dark" ? (
              <BsSun size={25} />
            ) : (
              <BsFillMoonFill size={25} />
            )}
          </li>
          <li
            className="mx-2 cursor-pointer sm:hidden mt-2"
            onClick={responsiveMenu}
          >
            {Icon}
          </li>
        </ul>

        
        <ul
          className={`flex flex-col ml-auto space-y-3 bg-slate-100 transition-all w-full p-3 z-10 ${Margin} sm:hidden text-lg ${
            props.mode === "dark" ? "text-white bg-gray-600" : "bg-gray-200"
          }`}
        >
          <Link to="/" className="ml-auto">
            <li  onClick={responsiveMenu}>Home </li>
          </Link>
          <Link to="/collection" className="ml-auto">
            <li  onClick={responsiveMenu}>Collection </li>
          </Link>
          <Link to="/login" className="ml-auto">
            <li  onClick={responsiveMenu}>My-Profile </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
