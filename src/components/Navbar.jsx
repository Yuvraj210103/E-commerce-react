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
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navbar(props) {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

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
      <nav className="flex flex-col fixed  top-0  min-w-full shadow-md z-50">
        <ul
          className={`flex flex-row p-3  z-30 ${
            props.mode === "dark" ? "text-white bg-gray-500" : "bg-gray-200"
          }`}
        >
          <label htmlFor="" className="mx-3">
            <img src={logo} alt="" className="w-10 h-9" />
          </label>

          <ul className="hidden  sm:flex ml-8 mt-1 text-lg">
            <NavLink  to="/" className="mx-6">
              <li className={`hover:border-b-4 border-orange-300 ${splitLocation[1] === "" ? "border-b-4" : ""}`}>Home </li>
            </NavLink>
            <NavLink to="/collection" className="mx-6">
              <li className={`hover:border-b-4 border-orange-300 active:border-b-4 ${splitLocation[1] === "collection" ? "border-b-4" : ""} `}>Collection </li>
            </NavLink>
            <NavLink to="/login" className="mx-6">
              <li className={`hover:border-b-4 border-orange-300 active:border-b-4 ${splitLocation[1] === "login" ? "border-b-4" : ""} `}>My-Profile </li>
            </NavLink>
          </ul>

          
            <li className="ml-auto mx-6 mt-2 relative cursor-pointer">
              <NavLink to="/cart">
            <AiOutlineShoppingCart size={25} />
            <span className="absolute -top-2 ml-5 z-10 bg-orange-300 rounded-full px-1">
              {totalUniqueItems}
            </span>
            </NavLink>
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
          className={`flex flex-col ml-auto space-y-3 bg-slate-100 transition-all w-full p-3 z-10 ${Margin} duration-500 sm:hidden text-lg ${
            props.mode === "dark" ? "text-white bg-gray-600" : "bg-gray-200"
          }`}
        >
          <NavLink to="/" className="ml-auto font-semibold text-xl">
            <li  onClick={responsiveMenu}>Home </li>
          </NavLink>
          <NavLink to="/collection" className="ml-auto font-semibold text-xl">
            <li  onClick={responsiveMenu}>Collection </li>
          </NavLink>
          <NavLink to="/login" className="ml-auto font-semibold text-xl">
            <li  onClick={responsiveMenu}>My-Profile </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
