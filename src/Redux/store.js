import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

// store
// in redux toolkit we use configureStore instead of legacyCrateStore.
const store = configureStore({
  reducer: reducer,
});

export default store;
