import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";

export default combineReducers({
  products: ProductReducer,
});
