import React, { useRef, useEffect } from 'react';

function QRVisual({ imageData }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = imageData;

    image.onload = () => {
      const qrSize = 50;
      const pixelSize = 5;
      const canvasSize = qrSize * pixelSize;

      canvas.width = canvasSize;
      canvas.height = canvasSize;

      ctx.drawImage(image, 0, 0, qrSize, qrSize);

      const imageData = ctx.getImageData(0, 0, qrSize, qrSize);
      const data = imageData.data;

      ctx.clearRect(0, 0, canvasSize, canvasSize);

      for (let y = 0; y < qrSize; y++) {
        for (let x = 0; x < qrSize; x++) {
          const index = (y * qrSize + x) * 4;
          const avg = (data[index] + data[index + 1] + data[index + 2]) / 3;
          const color = avg > 128 ? 255 : 0;

          ctx.fillStyle = color === 255 ? 'white' : 'black';
          
          ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
      }

      addCornerSquares(ctx, canvasSize, pixelSize);
    };
  }, [imageData]);

  const addCornerSquares = (ctx, size, pixelSize) => {
    const outerSquareSize = 7 * pixelSize;
    const innerSquareSize = 5 * pixelSize;
    const smallerSquareSize = 3 * pixelSize;
    const gapSize = 1 * pixelSize;

    const drawCornerSquare = (x, y) => {
      ctx.fillStyle = 'white';
      ctx.fillRect(x - gapSize, y - gapSize, outerSquareSize + 2 * gapSize, outerSquareSize + 2 * gapSize);

      ctx.fillStyle = 'black';
      ctx.fillRect(x, y, outerSquareSize, outerSquareSize);

      ctx.fillStyle = 'white';
      const innerOffset = (outerSquareSize - innerSquareSize) / 2;
      ctx.fillRect(x + innerOffset, y + innerOffset, innerSquareSize, innerSquareSize);

      ctx.fillStyle = 'black';
      const smallerOffset = (outerSquareSize - smallerSquareSize) / 2;
      ctx.fillRect(x + smallerOffset, y + smallerOffset, smallerSquareSize, smallerSquareSize);
    };

    drawCornerSquare(0, 0);
    drawCornerSquare(size - outerSquareSize, 0);
    drawCornerSquare(0, size - outerSquareSize);
  };

  return (
    <div className="qr-visual">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default QRVisual;