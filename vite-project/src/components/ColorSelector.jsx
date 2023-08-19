import React from "react";

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="color-selector">
      <p>Renk Seç</p>
      {colors.map((color, index) => (
        <span
          key={index}
          className={`color-option ${selectedColor === color ? "selected" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        >
          {/* 
          Fonksiyonların doğru, CSS'de hata varmış. .color-option display:inline-block olmalıymış. Çünkü
          burada bir şey yazmadığından ve css'de de .color-option display:inline-block veya block olmadığından, dolayı burada boş, 0x0 boyutunda bir kutu oluşuyor. Ona da tıklanamıyor. 
        
        geçen ders sonrası paylaştığım mesajdaki bağlantıyı ekliyorum yine: 
        HTML block ve inline elemanlar
        https://www.w3schools.com/html/html_blocks.asp 
        */}
        </span>
      ))}
    </div>
  );
};

export default ColorSelector;