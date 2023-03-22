import React from 'react';
import '../styles/food.css';
import ShowTypes from '../components/ShowTypes';
import {foodkinds} from '../Assets/DATA/Data'; 

const Food = () => {
  return (
    <>
           <ShowTypes services={foodkinds} />   
    </>
  )
}
export default Food
