import { configureStore } from "@reduxjs/toolkit";

//Import your slices here 

import exampleSlices from "./slices/exampleSlice"

const store = configureStore({
  reducer: {
    example: exampleSlices,
  },
});