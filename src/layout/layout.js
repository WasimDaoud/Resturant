import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Drinks from "../pages/Drinks";
import Food from "../pages/Food";
import Order from "../pages/Order";
import Sweet from "../pages/Sweet";
import VeganFood from "../pages/VeganFood";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Services from "../pages/Services";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Meals from "../components/Meals";
import Details from "../components/Details";
import ShowDrinks from "../components/ShowDrinks";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/drinks" element={<Drinks />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/sweet" element={<Sweet />}></Route>
        <Route path="/vegan" element={<VeganFood />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/meals/:mealID" element={<Details />}></Route>
        <Route path="/showDrinks/:mealID" element={<Details />}></Route>
        <Route path="/vegan/:mealID" element={<Details />}></Route>
        <Route path="/sweet/:mealID" element={<Details />}></Route>
        <Route path="/meals" element={<Meals />}></Route>
        <Route path="/showDrinks" element={<ShowDrinks />}></Route>
        <></>
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
