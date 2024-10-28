import React, { useState, useEffect } from 'react';

function TextAnimation() {
  const [displayText, setDisplayText] = useState('');
  const targetText = `This website is an artistic tool that transforms regular images
  into QR code-like pixel art for creative visual purposes. Right-click the converted image to download.`;
  const duration = 1200;
  const frameRate = 50;
  const totalFrames = duration / (1000 / frameRate);

  useEffect(() => {
    let frame = 0;

    function getRandomChar() {
      const chars = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*(){}[].,-_+=;:<>?/|";
      return chars[Math.floor(Math.random() * chars.length)];
    }

    function animateText() {
      const progress = frame / totalFrames;
      const numCorrectChars = Math.floor(progress * targetText.length);
      let updatedText = "";

      for (let i = 0; i < targetText.length; i++) {
        if (i < numCorrectChars) {
          updatedText += targetText[i];
        } else if (targetText[i] === ' ') {
          updatedText += ' ';
        } else {
          updatedText += getRandomChar();
        }
      }

      setDisplayText(updatedText);
      frame++;

      if (frame <= totalFrames) {
        setTimeout(animateText, 1000 / frameRate);
      } else {
        setDisplayText(targetText);
      }
    }

    animateText();

  }, [targetText, totalFrames, frameRate]);

  return (
    <p>{displayText}</p>
  );
}

export default TextAnimation;