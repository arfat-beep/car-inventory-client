import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { GrClose } from "react-icons/gr";
const SingleItem = ({ product, handleDelete }) => {
  return (
    <div className="product-container">
      <div className="product-details">
        <strong>Name : </strong> {product.name} <br />
        <strong>Email : </strong>
        {product.email} <br />
        <strong>Image-link : </strong> :{product.img}
        <br />
        <strong>Description</strong> {product.description}
        <br />
        <strong>Price : </strong> {product.price}
        <br /> <strong>Quantity</strong>: {product.quantity} <br />
        <strong>Suplier : </strong>: {product.suplier}
      </div>
      <div onClick={() => handleDelete(product._id)} className="product-delete">
        <GrClose></GrClose>
      </div>
    </div>
  );
};

export default SingleItem;
