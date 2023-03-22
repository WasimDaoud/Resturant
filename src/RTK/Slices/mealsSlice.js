import { createSlice } from "@reduxjs/toolkit";
import { foods } from "../../Assets/DATA/Data";

const mealsSlice = createSlice({
  initialState: [],
  name: " mealsSlice ",
  reducers: {
    getChicken: (state, action) => {
      const chickenMeals = foods.filter((meal) => meal.kind === "chicken");
      return chickenMeals;
    },

    getBeef: (state, action) => {
      const beefMeals = foods.filter((meal) => meal.kind === "beef");
      return beefMeals;
    },

    getSeaFood: (state, action) => {
      const seaFoodMeals = foods.filter((meal) => meal.kind === "seafood");
      return seaFoodMeals;
    },

    getFastFood: (state, action) => {
      const fastFoodMeals = foods.filter((meal) => meal.kind === "fastfood");
      return fastFoodMeals;
    },
  },
});

export default mealsSlice.reducer;
export const {
  getChicken,
  getBeef,
  getSeaFood,
  getFastFood,
} = mealsSlice.actions;
