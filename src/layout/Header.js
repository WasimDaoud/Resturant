import React, { useState } from "react";
import "../styles/header.css";
import logo from "../Assets/IMAGES/TT-logo.png";
import { FaRegUser, FaSistrix, FaTruck } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const [barVal, setBarVal] = useState(false);

  const orderMeals = useSelector((state) => state.order);
  const Qty = orderMeals.reduce((acc, meal) => {
    return (acc += meal.quantity);
  }, 0);

  const navLinks = [
    {
      id: 1,
      title: "HOME",
      path: "/home",
    },
    {
      id: 6,
      title: "SERVICES",
      path: "/services",
    },
    {
      id: 2,
      title: "FOOD",
      path: "food",
    },
    {
      id: 3,
      title: "DRINKS",
      path: "drinks",
    },
  ];

  return (
    <header className="sticky z-[10000] top-0 bg-white header md:px-4">
      <nav className="mx-auto flex items-center justify-between bg-transparent h-[70px] max-w-[1380px] border-b-[2px] border-orange-800">
        <div className="max-h-[70px] max-w-[175px] flex items-center gap-4">
          <div className="max-w-[60px] md:max-w-[70px] max-h-[70px]">
            <Link to="/">
              <img className=" min-w-[60px]" src={logo} alt="logo" />
            </Link>
          </div>
          <h1 className="tasty text-[25px] md:text-[30px]">TASTY</h1>
        </div>

        <div className="hidden md:flex ">
          <ul className="">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "active px-[15px]" : "px-[15px] "
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <RiArrowUpDownLine
            onClick={() => {
              setBarVal(!barVal);
            }}
            className="text-orange-800 mr-2 text-[23px] cursor-pointer md:hidden hover:scale-125 duration-500"
          />
          <Link to="/order" className="relative">
            <span className="badge bg-orange-800">{Qty}</span>
            <FaTruck className="text-orange-800 text-[23px]" />
          </Link>
          <Link to="/login">
            <FaRegUser className="text-orange-800 text-[17px] mr-1 ml-2 cursor-pointer md:text-[20px]" />
          </Link>
        </div>
      </nav>

      {barVal ? (
        <div className="w-full  md:hidden">
          <ul className="mob-menu py-[30px] flex flex-col items-center gap-[25px]">
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/food">Food</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/drinks">Drinks</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="w-full  md:hidden">
          <ul className="move-up py-[30px] flex flex-col items-center gap-[25px]">
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/food">Food</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/drinks">Drinks</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/vegan">Vegan Food</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/sweet">Sweet</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
