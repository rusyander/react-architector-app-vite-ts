import React from 'react';
import './links.css';

import CartIcon from '../../../../UI/Cart-icon/CartIcon';
import PhotoImage from '../../../../../assets/images/photo.svg';
import VideoImage from '../../../../../assets/images/video.svg';
import WorkImage from '../../../../../assets/images/work.svg';
import TextImage from '../../../../../assets/images/article.svg';

export default function Links() {
  return (
    <div className="LinksMain">
      <CartIcon imageUrl={PhotoImage} text="Photo" />
      <CartIcon imageUrl={VideoImage} text="Photo" />
      <CartIcon imageUrl={WorkImage} text="Working" />
      <CartIcon imageUrl={TextImage} text="Create Article" />
    </div>
  );
}
