import { combineReducers } from "redux";
import productsSlice from "./slices/productsSlice";
import categorySlice from "./slices/categorySlice";

export default combineReducers({
  productsSlice,
  categorySlice,
});
