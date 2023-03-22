import { createSlice } from "@reduxjs/toolkit";
import { foods } from "../../Assets/DATA/Data";

const sweetVeganSlice = createSlice({
  initialState: [],
  name: "sweetVeganSlice",
  reducers: {
    getVegan: (state, action) => {
      const vegans = foods.filter((meal) => meal.kind === "vegan");
      return vegans;
    },

    getSweet: (state, action) => {
      const sweets = foods.filter((meal) => meal.kind === "sweet");
      return sweets;
    },
  },
});

export default sweetVeganSlice.reducer;
export const { getVegan, getSweet } = sweetVeganSlice.actions;
