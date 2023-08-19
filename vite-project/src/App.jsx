// handleColorChange, handleSizeChange, handleQuantityChange: Bu fonksiyonlar düzenli ve anlaşılır. İyi yapılmış.
// imageUrl: Bu değişken kullanılmamış gibi görünüyor. Eğer kullanılmayacaksa kaldırılabilir.
// colors ve sizes: Sabit değerler olarak tanımlanmış, bu iyi bir uygulama.
// ClothingItem bileşeni: İki kez kullanılmış, ancak ikinci kullanım selectedColor'a bağlı. Bu, kullanıcının bir renk seçmesi durumunda görselin güncellenmesi için mi? Eğer öyleyse, ilk kullanımın yerine geçebilir.
// ColorSelector, SizeSelector, QuantitySelector: Bu bileşenlerin kullanımı düzenli ve anlaşılır. Props'lar iyi bir şekilde geçirilmiş.
// button: Sepete ekle butonu, handleSubmit fonksiyonuna bağlanmış. Bu kısım da düzenli.
// Genel olarak, JSX kodu düzenli ve anlaşılır. İlk ClothingItem bileşeninin kullanımı üzerinde düşünmek isteyebilirsiniz.

import React, { useState } from "react";
import ClothingItem from "./components/ClothingItem";
import ColorSelector from "./components/ColorSelector";
import SizeSelector from "./components/SizeSelector";
import QuantitySelector from "./components/QuantitySelector";

import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleColorChange = (color) => {
    console.log("Renk değişti:", color)
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const imageUrl = selectedColor ? `URL_${selectedColor}` : "";
  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleSubmit = () => {
    console.log("Renk:", selectedColor);
    console.log("Beden:", selectedSize);
    console.log("Adet:", selectedQuantity);
  };

  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "white", "gray", "pink", "brown", "teal", "navy", "maroon"];
  const sizes = ["small", "medium", "large", "extra large", "XXL"];

  return (
    <div className="app">
      <div className="left-section">
        <ClothingItem imageUrl="./assets/variations/beige.png" />
      </div>
      <div className="right-section">
        <p className="price">$70.00</p>
        <ColorSelector colors={colors} onColorChange={handleColorChange} />
        {selectedColor && <ClothingItem imageUrl="./assets/variations/beige.png" />}
        <SizeSelector sizes={sizes} onSizeChange={handleSizeChange} />
        <QuantitySelector onQuantityChange={handleQuantityChange} />
        <button className="add-to-cart" onClick={handleSubmit}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default App;