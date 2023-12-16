import { configureStore } from "@reduxjs/toolkit";
import mysliceReducer from "./slices/mySlice";

export const store = configureStore({
  reducer: {
    myfirstSlice: mysliceReducer,
  },
});
