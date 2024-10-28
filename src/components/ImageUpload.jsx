import React, { useState } from 'react';

function ImageUpload({ onUpload }) {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = [];

    files.forEach(file => {
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result);
          onUpload(newPreviews);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleImageChange} multiple />
    </div>
  );
}

export default ImageUpload;
