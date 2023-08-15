import React from "react";

const ClothingItem = ({ imageUrl }) => {
  return (
    <div className="clothing-item">
      <img src={imageUrl} alt="Clothing" />
    </div>
  )
};

export default ClothingItem;