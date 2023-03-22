import React, { useState } from "react";
import "../styles/meals.css";
import { FaSistrix } from "react-icons/fa";

import Card from "../components/Card";

import { useSelector } from "react-redux";


const Sweet = () => {

  const sweets = useSelector((state) => state.sweetVegan);
  const [searchSweets, setSearchSweets] = useState(sweets);

  const searching = (e) => {
    const val = e.target.value;
    const search = sweets.filter((meal) => {
      return meal.title.toLowerCase().includes(val.toLowerCase());
    });

    if (val != "") {
      setSearchSweets(search);
    } else {
      setSearchSweets(sweets);
    }
  };

  return (
    <div className="meal-page z-10">
      <div className="max-w-[1380px] mx-auto">
        {/*first section ( image - search ) */}
        <div className=" w-full h-[275px] flex flex-col md:flex-row items-center justify-center ">
          <div className="h-full moving-image w-[275px] mt-[50px]  md:w-[45%] lg:w-[35%] md:relative">
            <img
              src={sweets[0].mainimage}
              className="w-[100%] md-w-[80%] h-full md:right-[150px] mx-auto md:absolute"
            />
          </div>
          <div className="md:relative">
            <div className="moving-input md:right-[-175px] bg-transparent search-section w-[300px] md:min-w-[200px] flex justify-between items-center border-t-[1px] border-b-[1px] border-orange-800 text-white text-xl md:absolute mt-[20px]">
              <input
                className="h-[30px] md:min-w-[100px] w-[150px] rounded-sm  outline-none border-0 bg-transparent "
                type="text"
                placeholder="Enter To Search"
                onChange={searching}
              />
              <FaSistrix className="text-orange-800 text-[20px]" />
            </div>
          </div>
        </div>
        {}

        {/* second section ( meals )*/}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] md:mt-[100px]">
          {searchSweets.map((meale) => (
            <div
              key={meale.id}
              className="overflow-hidden mx-auto w-[250px] h-[325px]  hover:scale-110 duration-500 flex justify-center items-center my-[10px]"
            >
              <Card meale={meale} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sweet;
