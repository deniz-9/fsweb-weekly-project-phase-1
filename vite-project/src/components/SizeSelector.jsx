// handleIncrement ve handleDecrement fonksiyonları: Bu fonksiyonlar, miktarın artırılması ve azaltılması işlemlerini düzenli bir şekilde ele alıyor. Miktarın belirli bir aralıkta kalmasını sağlamak iyi bir uygulama.
// onQuantityChange: Bu fonksiyon, miktar değiştiğinde üst bileşene bilgi göndermek için kullanılıyor. İyi düşünülmüş.
// button etiketleri: Artı ve eksi butonları, miktarı değiştirmek için kullanılıyor. Bu, kullanıcıya anlaşılır bir arayüz sunar.
// .plus-button sınıfı: Hem artı hem de eksi butonları için aynı sınıfın kullanılması biraz kafa karıştırıcı olabilir. Farklı sınıflar kullanmak veya daha açıklayıcı bir isim seçmek daha iyi olabilir.
// Genel olarak, bu bileşen düzenli, anlaşılır ve etkili. İyi yapılmış.
import React from "react";

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div className="size-selector">
      <p>Bedeni Seç</p>
      {sizes.map((size, index) => (
        <button
          key={index}
          className={`size-option ${selectedSize === size ? "selected" : ""}`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;