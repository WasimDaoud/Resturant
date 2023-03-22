import { createSlice } from "@reduxjs/toolkit";
import { foods } from "../../Assets/DATA/Data";

const DrinkSlice = createSlice({
  initialState: [],
  name: "DrinkSlice",
  reducers: {
    getCold: (state, action) => {
      const cold = foods.filter((drink) => {
        return drink.kind === "cold";
      });
      return cold;
    },
    getHot: (state, action) => {
      const hot = foods.filter((drink) => {
        return drink.kind === "hot";
      });
      return hot;
    },
    getMilk: (state, action) => {
      const milk = foods.filter((drink) => {
        return drink.kind === "milk";
      });
      return milk;
    },
    getAlcoholic: (state, action) => {
      const alcoholic = foods.filter((drink) => {
        return drink.kind === "alcoholic";
      });
      return alcoholic;
    },
  },
});

export default DrinkSlice.reducer;
export const { getCold, getAlcoholic, getMilk, getHot } = DrinkSlice.actions;
