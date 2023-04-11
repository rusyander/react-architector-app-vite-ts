import React from 'react';
import './avatar.css';

type UserAvatar = 'list' | 'standart' | 'main' | 'small';

interface AvatarProps {
  imageUrl: string;
  avatar?: UserAvatar;
  text?: string;
}

export default function Avatar({ imageUrl, avatar, text }: AvatarProps) {
  return (
    <div>
      {avatar === 'list' && (
        <div className="listtImageDiv">
          <img src={imageUrl} className="listtImage" alt="avatar" />
          <p className="listtImageText">{text}</p>
        </div>
      )}

      {avatar === 'standart' && (
        <img src={imageUrl} className="standartImage" alt="avatar" />
      )}

      {avatar === 'main' && (
        <div className="mainImageDiv">
          <img src={imageUrl} className="mainImage" alt="avatar" />
          <p className="mainImageText">{text}</p>
        </div>
      )}

      {avatar === 'small' && (
        <img src={imageUrl} className="smallImage" alt="avatar" />
      )}
    </div>
  );
}

Avatar.defaultProps = {
  avatar: 'standart',
  text: '',
};
