import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";

import { addMeal } from "../RTK/Slices/orderSlice";
import { useSelector, useDispatch } from "react-redux";

import { RiHeartAddFill } from "react-icons/ri";

import swal from "sweetalert";

const Card = (props) => {
  const meals = useSelector((state) => state.order);
  const dispatch = useDispatch();

  // SWEET ALERT FUNCTION TO ADD ONE MEAL ----------
  const swalAddMeal = () => {
    swal({
      title: `${props.meale.title.toUpperCase()} has been Added to Your Order Successfully`,
      icon: "success",
    });
  };
  //---------------------------------------------------

  return (
    <div className="over">
      <div className="card-container hover:relative w-[100%] h-[100%] flex">
        <div className="card w-[250px] h-[325px] flex flex-col justify-center p-[5px]">
          <div className="card-bg w-[100%] h-[80%]">
            <Link to={`/meals/${props.meale.id}`}>
              <img
                className="w-[100%] h-[100%]"
                src={props.meale.image}
                alt=".........."
              />
            </Link>
          </div>
          <Link
            to={`/meals/${props.meale.id}`}
            className="card-title w-[100%] h-[10%]"
          >
            <h1 className=" text-center text-[25px] text-orange-800 hover:scale-110 duration-500">
              {props.meale.title}
            </h1>
          </Link>
          <div className="card-title flex justify-between w-full h-[10%] text-[25px] text-white px-[10px] ">
            <h3>{props.meale.price} $</h3>
            <button
              onClick={() => {
                dispatch(addMeal(props.meale));
                swalAddMeal();
              }}
            >
              <RiHeartAddFill className="addIcon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
