import React from 'react';

import './following.css';
import Avatar from '../../UI/Avatar/Avatar';
import P from '../../UI/P/P';
import AddIcons from '../../../assets/images/plus-circle.svg';
import UserIcons from '../../../assets/images/userIcon.svg';

interface FolliwingProps {
  imageUrl: string;
  textName: string;
  text: string;
  id?: string;
  onChange: (e: string) => void;
}

export default function Folliwing({
  imageUrl,
  textName,
  text,
  id,
  onChange,
}: FolliwingProps) {
  function addId() {
    console.log('id');
    onChange('id');
  }
  return (
    <div className="FolliwingMain">
      <div className="FolliwingMainLeft">
        <Avatar
          imageUrl={imageUrl == null ? UserIcons : imageUrl}
          avatar="small"
        />
        <div className="FolliwingMainText">
          <P size="medium" weight="bold" className="FolliwingMainColors">
            {textName}
          </P>
          <P size="small">{text}</P>
        </div>
      </div>
      <img
        role="presentation"
        src={AddIcons}
        className="FolliwingMainImage"
        alt="add"
        onClick={addId}
      />
    </div>
  );
}

Folliwing.defaultProps = {
  id: '',
};
