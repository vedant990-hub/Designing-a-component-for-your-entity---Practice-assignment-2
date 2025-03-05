import React from "react";
import ViewProductButton from "../components/button";


const Productcard = () => {
  // Static product details
  
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="product-card">
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <div className="button-container">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard; 