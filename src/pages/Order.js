import React from "react";
import "../styles/order.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { deleteMeale, clear } from "../RTK/Slices/orderSlice";

import { RiDeleteBin5Line } from "react-icons/ri";

import swal from "sweetalert";

const Order = () => {
  const orderMeals = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const TotalPrice = orderMeals.reduce((acc, meal) => {
    return (acc += meal.price * meal.quantity);
  }, 0);
  const Qty = orderMeals.reduce((acc, meal) => {
    return (acc += meal.quantity);
  }, 0);

  // SWEETALERT CLEAR BUTTON FUNCTION -------------------------
  const swalertFun = () => {
    swal({
      title: "Are you sure ? you are going to cancel this Order !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(clear());
        swal("Your Order has been canceled!", {
          icon: "success",
        });
      } else {
        swal("Your Order is Safe !");
      }
    });
  };
  //---------------------------------------------------

  const placeOrderFun = ()=>{
    swal({
      title : "Please Login to Continue"
    })
  }

  return (
    <div className="order-page w-full">
      <div className="order-section max-w-[1380px] mx-auto">
        <div className="table-order-container bg-transparent flex flex-col md:flex-row justify-between items-center py-[50px]">
          <table className=" w-[90%] md:w-[70%] mx-auto mb-[30px] md:mb-0">
            <thead>
              <tr className="table-header-tr text-center text-2xl border-b-2 border-red-800 my-[10px] ">
                <td>Image</td>
                <td>Kind</td>
                <td>Title</td>
                <td>Price </td>
                <td>Qty</td>
                <td>Total Price </td>
                <td>
                  <button
                    onClick={() => {
                      swalertFun();
                    }}
                    className="mb-[2px] bg-red-800 text-white px-[5px] rounded-md text-sm"
                  >
                    Clear
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {orderMeals.map((meal) => (
                <tr
                  key={meal.id}
                  className="table-body-tr text-xl w-[80px] h-[80px] text-center border-b-[1px] border-red-800"
                >
                  <td className="w-[80px] h-[80px]">
                    <img className="w-full h-[95%]" src={meal.image} />
                  </td>
                  <td>{meal.kind}</td>
                  <td>{meal.title}</td>
                  <td>{meal.price} $</td>
                  <td>{meal.quantity} px</td>
                  <td>{meal.price * meal.quantity} $</td>
                  <td>
                    <RiDeleteBin5Line
                      className="text-red-800 mx-auto cursor-pointer hover:scale-125 duration-500"
                      onClick={() => {
                        dispatch(deleteMeale(meal));
                        swal({
                          title: `${meal.title.toUpperCase()} has been Deleted from Your Order Successfully`,
                          icon: "warning",
                          dangerMode: true,
                        });
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="order text-xl w-[50%] md:w-[25%] bg-transparent md:px-[15px] px-[60px]">
            <div className="flex justify-between items-center p-[10px]">
              <span>Qty</span>
              <span className="text-white">{Qty} px</span>
            </div>
            <div className="flex justify-between items-center p-[10px]">
              <span>Cost </span>
              <span className="text-white">{TotalPrice} $</span>
            </div>
            <div className="flex justify-between items-center p-[10px]">
              <span>Free</span>
              <span className="text-white"> 0 $</span>
            </div>

            <div className="total-cost-hr"></div>

            <div className="flex justify-between items-center p-[10px] text-2xl border-b-2 border-orange-800">
              <span>Total Cost</span>
              <span className="text-white">{TotalPrice} $</span>
            </div>
            <div className="flex justify-center">
              <Link to="/login" onClick={()=>{placeOrderFun()}} className="palce-order-link mt-[20px]">
                Place an Order
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to="/services" className="palce-order-link my-[20px]">
                Buy More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer autoClose={3000} position="bottom-center"/> */}
    </div>
  );
};

export default Order;
