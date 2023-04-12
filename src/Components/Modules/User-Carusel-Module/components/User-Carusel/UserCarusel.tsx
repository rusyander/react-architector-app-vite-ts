import React from 'react';
import './userCarusel.css';

import UserImage from '../../../../../assets/images/userIcon.svg';
import Avatar from '../../../../UI/Avatar/Avatar';

export default function UserCarusel() {
  return (
    <div className="UserCaruselMain">
      <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
    </div>
  );
}
