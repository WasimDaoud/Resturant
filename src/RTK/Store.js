import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./Slices/mealsSlice";
import orderSlice from "./Slices/orderSlice";
import DrinkSlice from "./Slices/DrinksSlice";
import sweetVeganSlice from "./Slices/SweetVeganSlice";

export const store = configureStore({
  reducer: {
    meals: mealsSlice,
    order: orderSlice,
    drinks: DrinkSlice,
    sweetVegan: sweetVeganSlice,
  },
});
