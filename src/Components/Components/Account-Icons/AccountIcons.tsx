import React from 'react';

import './accountIcons.css';
import Avatar from '../../UI/Avatar/Avatar';
import Arrow from '../../UI/Arrow/Arrow';

interface AccountIconsProps {
  imageUrl: string;
  textName: string;
}

export default function AccountIcons({
  imageUrl,
  textName,
}: AccountIconsProps) {
  return (
    <div className="AccountIconsMain">
      <div className="AccountIconsMainAvatar">
        <Avatar imageUrl={imageUrl} avatar="small" />
      </div>
      <p className="AccountIconsMainText">{textName}</p>
      <Arrow position="bottom" />
    </div>
  );
}
