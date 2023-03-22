import "../styles/ShowTypes.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  getChicken,
  getBeef,
  getSeaFood,
  getFastFood,
} from "../RTK/Slices/mealsSlice";
import {
  getCold,
  getAlcoholic,
  getMilk,
  getHot,
} from "../RTK/Slices/DrinksSlice";
import { getSweet , getVegan } from "../RTK/Slices/SweetVeganSlice";

const ShowTypes = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-section-2 w-full">
        <div className="section-2container max-w-[1380px] h-full mx-auto">
          <div className="flex flex-col justify-center w-full h-[100%] py-100px]">
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="tl hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[40%] border-b-[3px] border-orange-800">
                <Link
                  onClick={() => {
                    dispatch(getChicken());
                    dispatch(getHot());
                  }}
                  className="relative "
                  to={`/${props.services[0].path}`}
                >
                  <img
                    src={props.services[0].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-25px] right-[46%] text-[30px]">
                    {props.services[0].title}
                  </h1>
                </Link>
              </div>
              <div className="tr hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[55%] border-b-[3px] border-white">
                <Link
                  onClick={() => {
                    dispatch(getBeef());
                    dispatch(getCold());
                  }}
                  className="relative"
                  to={`/${props.services[1].path}`}
                >
                  <img
                    src={props.services[1].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-25px] left-[46%] text-[30px]">
                    {props.services[1].title}
                  </h1>
                </Link>
              </div>
            </div>
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="bl hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[55%] border-t-[3px] border-white">
                <Link
                  onClick={() => {
                    dispatch(getSeaFood());
                    dispatch(getAlcoholic());
                    dispatch(getSweet());
                  }}
                  className="relative"
                  to={`/${props.services[2].path}`}
                >
                  <img
                    src={props.services[2].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-45px] right-[46%] text-[30px]">
                    {props.services[2].title}
                  </h1>
                </Link>
              </div>
              <div className="br hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[40%] border-t-[3px] border-orange-800">
                <Link
                  onClick={() => {
                    dispatch(getFastFood());
                    dispatch(getMilk());
                    dispatch(getVegan());
                  }}
                  className="relative"
                  to={`/${props.services[3].path}`}
                >
                  <img
                    src={props.services[3].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-45px] left-[46%] text-[30px]">
                    {props.services[3].title}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTypes;
