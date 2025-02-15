import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterVal: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.counterVal = ++state.counterVal;
    },
    delCounter: (state, action) => {
      state.counterVal = --state.counterVal;
    },
  },
});

export const { addCounter, delCounter } = counterSlice.actions;

export default counterSlice.reducer;
