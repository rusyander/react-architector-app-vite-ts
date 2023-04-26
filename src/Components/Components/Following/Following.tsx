import React from 'react';

import './following.css';
import Avatar from '../../UI/Avatar/Avatar';
import P from '../../UI/P/P';
import AddIcons from '../../../assets/images/plus-circle.svg';
import UserIcons from '../../../assets/images/userIcon.svg';

interface FollowingProps {
  imageUrl: string;
  textName: string;
  text: string;
  id?: string;
  onChange: (e: string) => void;
}

export default function Following({
  imageUrl,
  textName,
  text,
  id,
  onChange,
}: FollowingProps) {
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
        src={AddIcons}
        className="FolliwingMainImage"
        alt="add"
        onClick={addId}
      />
    </div>
  );
}

Following.defaultProps = {
  id: '',
};
