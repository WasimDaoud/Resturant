import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  initialState: [],
  name: "orderSlice",
  reducers: {
    addMeal: (state, action) => {
      const found = state.find((meal) => {
        return meal.id === action.payload.id;
      });
      if (!found) {
        const clone = { ...action.payload, quantity: 1 };
        state.push(clone);
      } else {
        found.quantity += 1;
      }
    },

    deleteMeale: (state, action) => {
      const found = state.find((meal) => {
        return meal.id === action.payload.id;
      });

      if (found) {
        if (found.quantity > 1) {
          found.quantity -= 1;
        } else {
          const meals = state.filter((meal) => {
            return meal.id != found.id;
          });
          return meals;
        }
      }
    },

    clear: (state, action) => {
      return (state = []);
    },
  },
});

export default orderSlice.reducer;
export const { addMeal, deleteMeale, clear } = orderSlice.actions;
