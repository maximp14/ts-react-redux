import { TProduct, ProductTypes, ADD_PRODUCT } from "./../types/types";

interface IState {
  loading: boolean;
  product: TProduct | null;
}

const initialState: IState = {
  loading: false,
  product: null,
};

const productReducer = (
  state: IState = initialState,
  action: ProductTypes
): IState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
