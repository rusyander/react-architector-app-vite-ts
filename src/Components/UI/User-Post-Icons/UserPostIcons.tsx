import React from 'react';
import './userPostIcons.css';

interface UserPostIconsProps {
  imageUrl: string;
  text: string;
}

export default function UserPostIcons({ imageUrl, text }: UserPostIconsProps) {
  return (
    <div className="UserPostIconsContainer">
      <img src={imageUrl} alt="icons" />
      <p className="UserPostIconsText">{text}</p>
    </div>
  );
}
