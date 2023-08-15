import React, { useState } from "react";

const QuantitySelector = ({ selectedQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(selectedQuantity);

  const handleIncrement = () => {
    if (quantity < 5) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="quantity-selector">
      <p>Adet Seç</p>
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default QuantitySelector;