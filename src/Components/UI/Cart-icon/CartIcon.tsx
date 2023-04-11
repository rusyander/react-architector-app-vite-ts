import React from 'react';
import './cartIcon.css';

interface CartIconProps {
  imageUrl: string;
  text: string;
}

export default function CartIcon({ imageUrl, text }: CartIconProps) {
  return (
    <div className="CartIconBox">
      <div className="CartIconImageDiv">
        <img className="CartIconImage" src={imageUrl} alt="icons" />
      </div>
      <p className="CartIconText">{text}</p>
    </div>
  );
}
