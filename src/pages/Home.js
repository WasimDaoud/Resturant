import React from "react";
import "../styles/home.css";
import chicken from "../Assets/IMAGES/beef4.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home w-full">
        <div className="h-[100%] mx-auto max-w-[1380px]">
          {/* section-1-of home-page*/}
          {/* container of welcome & image */}
          <div className="flex flex-col md:flex-row h-[100%] w-[100%]">
            <div className="md:w-[50%] md:h-[100%] h-[50%] flex-col justify-center items-center">
              {/* home welcome */}
              <div className="welcome  w-[100%] h-[50%] md:w-[100%] md:h-[50%] flex items-center justify-center text-white">
                <h1 className="md:text-[45px] text-center text-[35px]">
                  Welcome In
                  <span className="md:text-[55px] text-[40px] mx-3">TASTY</span>
                  Restaurant
                </h1>
              </div>
              {/* arrow container */}
              <div className="flex justify-center w-[100%] h-[50%] ">
                <Link to="/services" className="relative ">
                  <MdOutlineKeyboardDoubleArrowDown className="arrow text-[60px]" />
                  <button className="home-btn text-white absolute top-[65px] right-[-65px] w-[150px] border-[1px] rounded-md p-1 text-xl border-orange-600 hover:bg-orange-700 hover:border-none hover:scale-105 duration-500">
                    At Your Service
                  </button>
                </Link>
              </div>
            </div>

            {/* home image */}
            <div className="home-image-container w-[100%] h-[50%] md:w-[50%] md:h-[90%] flex justify-center items-end relative">
              <img src={chicken} className="home-image absolute max-w[70%] max-h-[70%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
