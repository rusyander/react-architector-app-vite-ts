import React from 'react';
import './userPostIcons.css';

import SendIcon from '../../../assets/images/send.svg';

interface UserPostIconsProps {
  imageUrl: string;
  text: string;
}

export default function UserPostIcons({ imageUrl, text }: UserPostIconsProps) {
  return (
    <div className="UserPostIconsContainer">
      <img src={imageUrl == null ? SendIcon : imageUrl} alt="icons" />
      <p className="UserPostIconsText">{text}</p>
    </div>
  );
}
