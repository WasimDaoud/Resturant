import React from 'react';
import ShowTypes from '../components/ShowTypes';
import {drinkkinds} from '../Assets/DATA/Data'; 


const Drinks = () => {
  return (
    <div>
            <ShowTypes services={drinkkinds} />   
    </div>
  )
}

export default Drinks
