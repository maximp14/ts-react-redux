import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

const ListProduct: React.FC = () => {
  const product = useSelector((state: RootStore) => state.products);
  console.log("Product Reducer: ", product);
  return <div></div>;
};

export default ListProduct;
