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
      <img
        data-testid="post-links-icons"
        src={imageUrl == null ? SendIcon : imageUrl}
        alt="icons"
      />
      <p data-testid="post-link-text" className="UserPostIconsText">
        {text}
      </p>
    </div>
  );
}

UserPostIcons.defaultProps = {
  text: 'My text',
  imageUrl: SendIcon,
};
