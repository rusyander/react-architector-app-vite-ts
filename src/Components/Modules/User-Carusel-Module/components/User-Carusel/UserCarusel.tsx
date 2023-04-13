import React from 'react';
import './userCarusel.css';

import UserImage from '../../../../../assets/images/userIcon.svg';
import Avatar from '../../../../UI/Avatar/Avatar';

import Carusel from './Carusel/Carusel';

export default function UserCarusel() {
  return (
    <div className="UserCaruselMain">
      <Carusel>
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
        <Avatar imageUrl={UserImage} avatar="list" text="Julie" />
      </Carusel>
    </div>
  );
}
