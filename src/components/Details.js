import React from "react";

import "../styles/details.css";

import swal from "sweetalert";

import { foods } from "../Assets/DATA/Data";

import { useSelector , useDispatch } from "react-redux";
import { addMeal } from "../RTK/Slices/orderSlice";

import { useParams } from "react-router-dom";

const Details = () => {

    const myState = useSelector((state)=>state.order);
    const dispatch =useDispatch();

    const param = useParams();

    const myMeal = foods.find((meal)=>{
        return meal.id == param.mealID
    });

    const swalAddMeal = () => {
        swal({
          title: `${myMeal.title.toUpperCase()} has been Added to Your Order Successfully`,
          icon: "success",
        });
      };


  return (
    <div className="details-page">
      <div className="details-section max-w-[1380px] mx-auto">
        <div className="page-container p-[10px] md:p-[30px] flex flex-col md:flex-row justify-center items-center py-[80px] gap-[30px]">
            {/*image section*/}
          <div className="details-img-container w-[80%] md:w-[50%] h-[450px] text-center flex flex-col justify-center items-center">
            <img src={myMeal.image} className="details-img w-full h-[100%] "></img>
            <button className="absolute bottom-[-50px] px-[10px] my-[10px] py-[5] bg-white rounded-md text-black text-[20px] hover:bg-orange-800 hover:border-0 hover:scale-105 hover:text-white duration-500" onClick={()=>{
                swalAddMeal();
                dispatch(addMeal(myMeal))
                }}>Add to Order
            </button>
          </div>
            {/* title & description section*/}
          <div className="details-description md:w-[50%] w-[80%] min-h-[400px] flex flex-col items-center justify-center relative">
            <div className="details-title mt-[20px] w-full h-[30%] text-3xl text-center text-orange-800 absolute">
                {myMeal.title}
            </div>
            <div className="details-desc w-full h-[70%] text-white text-center mt-[25px]">
            {myMeal.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
