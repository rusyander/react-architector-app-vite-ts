import React from 'react';
import './cartIcon.css';

import CartIcons from '../../../assets/images/bell.svg';

interface CartIconProps {
  imageUrl: string;
  text: string;
}

export default function CartIcon({ imageUrl, text }: CartIconProps) {
  return (
    <div className="CartIconBox">
      <div className="CartIconImageDiv">
        <img
          className="CartIconImage"
          src={imageUrl == null ? CartIcons : imageUrl}
          alt="icons"
        />
      </div>
      <p className="CartIconText">{text}</p>
    </div>
  );
}

CartIcon.defaultProps = {
  text: 'My text',
  imageUrl: CartIcons,
};
