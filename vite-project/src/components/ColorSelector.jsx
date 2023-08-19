// selectedColor ve onColorChange: Bu prop'lar, seçilen rengi belirlemek ve renk değişikliğini işlemek için kullanılır. İyi düşünülmüş.
// .map kullanımı: Renk seçeneklerini döngü ile oluşturmak iyi bir yaklaşım.
// key={index}: Bu kullanım, React'ın listeleri etkili bir şekilde işlemesine yardımcı olur. Ancak, index kullanmak bazen sorunlara yol açabilir. Eğer mümkünse, benzersiz bir değer kullanmak daha iyidir. Burada endişelenmeye gerek yok.
// style={color}: Bu kısım, muhtemelen bir hata. style özelliği bir obje almalı. Örneğin: style={{ backgroundColor: color }}.
// className: Seçilen renk için "selected" sınıfını dinamik olarak eklemek iyi bir yaklaşım.
// Genel olarak, bu bileşen düzenli ve etkili. Yalnızca style özelliğinin düzeltilmesi gerekebilir.
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