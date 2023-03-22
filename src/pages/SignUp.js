import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const SignUp = () => {
  return (
    <div className="login-page w-full">
      <div className="login-section max-w-[1380px] mx-auto">
        <div className="mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[700px] p-[20px]">
          <form className="flex flex-col justify-evenly py-[30px] rounded-md my-[30px]">
            <h1 className="login-h1 text-2xl mx-auto my-[10px]">SignUp</h1>
            <input
              type="text"
              placeholder=" Your Name"
              className="login-input placeholder-orange-800 text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[95%] mx-auto outline-none rounded-md border-t-[3px] border-b-[3px]"
            />
            <input
              type="email"
              placeholder=" Your E-mail "
              className="login-input placeholder-orange-800 text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[95%] mx-auto outline-none rounded-md border-t-[3px] border-b-[3px]"
            />
            <input
              type="text"
              placeholder=" Your Password"
              className="login-input placeholder-orange-800 text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[95%] mx-auto outline-none rounded-md border-t-[3px] border-b-[3px]"
            />
            <button className="login-btn w-[85px] rounded-md border-l-0 border-r-0 mx-auto my-[20px]  bg-transparent border-[3px] hover:scale-105 duration-500">
              Signup
            </button>
            <div className="flex justify-center px-[20px]">
              <h3 className="text-white mx-[10px]">have an account ?</h3>
              <Link to="/login" className="text-white hover:text-orange-800">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
