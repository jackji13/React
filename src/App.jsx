import React, { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import QRVisual from './components/QRVisual';
import TextAnimation from './components/TextAnimation';

function App() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (data) => {
    setImages([...images, ...data]);
  };

  return (
    <div className="App">
      <p className="title">Image to QR Code Pixel Art</p>

      <TextAnimation />

      <ImageUpload onUpload={handleImageUpload} />
      
      <div className="visuals-container">
        <div className="preview-images">
          {images.map((imageData, index) => (
            <div key={`preview-${index}`} className="image-wrapper">
              <img src={imageData} alt={`Preview ${index + 1}`} />
              <p className="image-number">{String(index + 1).padStart(3, '0')}</p>
            </div>
          ))}
        </div>

        <div className="qr-visuals-list">
          {images.map((imageData, index) => (
            <div key={`qr-${index}`} className="qr-wrapper">
              <QRVisual imageData={imageData} />
              <p className="qr-number">{String(index + 1).padStart(3, '0')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;