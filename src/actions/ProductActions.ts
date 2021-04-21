import { Dispatch } from "redux";
import { ADD_PRODUCT, ProductTypes, TProduct } from "../types/types";

export const addProductAction = (product: TProduct) => (
  dispatch: Dispatch<ProductTypes>
) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
};
