export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";

export type TProduct = {
  notes: string;
};

export interface AddProduct {
  type: typeof ADD_PRODUCT;
  payload: TProduct;
}

export type ProductTypes = AddProduct;
