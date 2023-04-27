import React from 'react';
import './avatar.css';

import UsertAvatar from '../../../assets/images/userIcon.svg';

type UserAvatar = 'list' | 'standart' | 'main' | 'small' | 'default';

interface AvatarProps {
  imageUrl: string;
  avatar?: UserAvatar;
  text?: string;
}

export default function Avatar({ imageUrl, avatar, text }: AvatarProps) {
  return (
    <>
      {avatar === 'list' && (
        <div className="listtImageDiv">
          <img
            src={imageUrl == null ? UsertAvatar : imageUrl}
            className="listtImage"
            alt="avatar-list"
            data-testid="avatar-list-id"
          />
          <p className="listtImageText">{text}</p>
        </div>
      )}

      {avatar === 'standart' && (
        <img
          src={imageUrl == null ? UsertAvatar : imageUrl}
          className="standartImage"
          alt="avatar-standart"
        />
      )}

      {avatar === 'main' && (
        <div className="mainImageDiv">
          <img
            src={imageUrl == null ? UsertAvatar : imageUrl}
            className="mainImage"
            alt="avatar-main"
          />
          <p className="mainImageText">{text}</p>
        </div>
      )}

      {avatar === 'small' && (
        <img
          src={imageUrl == null ? UsertAvatar : imageUrl}
          alt="avatar-small"
          className="smallImage"
        />
      )}

      {avatar === 'default' && (
        <img
          src={imageUrl == null ? UsertAvatar : imageUrl}
          alt="avatar-default"
        />
      )}
    </>
  );
}

Avatar.defaultProps = {
  avatar: 'standart',
  text: '',
  imageUrl: UsertAvatar,
};
