import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./features/fetchSlice";

export default configureStore({
  reducer: {
    data: DataReducer,
  },
});
