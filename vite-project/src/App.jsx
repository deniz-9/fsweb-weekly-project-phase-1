
import React, { useState, } from "react";
import ClothingItem from "./components/ClothingItem";
import ColorSelector from "./components/ColorSelector";
import SizeSelector from "./components/SizeSelector";
import QuantitySelector from "./components/QuantitySelector";

import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("Ücretsiz Teslimat");
  const [showOptions, setShowOptions] = useState(false);
  const [postalCode, setPostalCode] = useState("");

 

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const getImageUrl = (color) => {

    return `/assets/variations/${color}.png`;
  };

  const initialImageUrl = "/assets/clothes-hanger_3159667.png";

  const imageUrl = selectedColor ? getImageUrl(selectedColor) : "";

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleDeliveryOptionChange = (option) => {
    setSelectedDeliveryOption(option);
  };


  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };


  const basePrice = 70;
  const sizePriceIncreasePercentage = 0.1; // %10
  const multiColorPriceIncreasePercentage = 0.05; // %5

  let totalPrice = basePrice;

  // Büyük beden için fiyat artışı
  if (selectedSize === "large" || selectedSize === "extra large" || selectedSize === "XXL") {
    totalPrice += basePrice * sizePriceIncreasePercentage;
  }

  // Çift renkli kıyafet için fiyat artışı
  if (selectedColor.includes("-")) {
    totalPrice += basePrice * multiColorPriceIncreasePercentage;
  }

  const handleSubmit = () => {
    console.log("Renk:", selectedColor);
    console.log("Beden:", selectedSize);
    console.log("Adet:", selectedQuantity);
    console.log("Teslimat Seçeneği:", selectedDeliveryOption);
    console.log("Posta Kodu:", postalCode);
    console.log("Toplam Fiyat:", totalPrice.toFixed(2));
  };

  const colors = ["beige", "gray-white", "green", "navy-green", "navy-lighblue", "navy-orange", "navy-red", "navy-white", "orange", "pink", "purple", "white", "white-red", "white-school"];
  const sizes = ["small", "medium", "large", "extra large", "XXL"];
  const deliveryOptions = [ "PTT", "MNG Kargo", "Yurtiçi Kargo", "Aras Kargo"];


  return (
    <div className="app">
      <div className="left-section">
        <ClothingItem imageUrl={initialImageUrl} />
      </div>
      <div className="right-section">
        <p className="price">${totalPrice.toFixed(2)}</p>
        <ColorSelector colors={colors} onColorChange={handleColorChange} />
        {selectedColor && (
          <div className="selected-color-item">
            <ClothingItem imageUrl={imageUrl} />
          </div>
        )}
        <SizeSelector sizes={sizes} onSizeChange={handleSizeChange} />
        <QuantitySelector onQuantityChange={handleQuantityChange} />


        <button className="add-to-cart" onClick={handleSubmit}>
          Add To Card
        </button>

        <div className="delivery-options">
          <p>Teslimat Seçenekleri</p>
          <div className="delivery-dropdown">
            <div
              className="selected-option"
              onClick={() => setShowOptions(!showOptions)}
            >
              {selectedDeliveryOption} <span className="arrow"></span>
            </div>
            {showOptions && (
              <ul className="options-list">
                {deliveryOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleDeliveryOptionChange(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
            <input
              type="text"
              placeholder="Teslimat uygunluğu için posta kodunu girin"
              className="postal-code"
              value={postalCode}
              onChange={handlePostalCodeChange}
            />
          </div>
        </div>
        <div className="return-policy">
          <p>Ürün İadesi</p>
          <p>30 gün için ürün iadesi ücretsiz</p>
          <p>
            Detaylar:{" "}
            <a href="#">Buraya tıklayın</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
