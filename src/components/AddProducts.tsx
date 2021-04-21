import React, { useState, useEffect } from "react";
import { TProduct } from "../types/types";
import { useDispatch } from "react-redux";
import { addProductAction } from "../actions/ProductActions";
import { useHistory } from "react-router-dom";

const AddProducts: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [product, setProduct] = useState<TProduct>({
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProductAction(product));
    setProduct({
      notes: "",
    });
    history.push("/list");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Notes</label>
      <input
        type="text"
        name="notes"
        value={product.notes}
        onChange={(e) => handleChange(e)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddProducts;
