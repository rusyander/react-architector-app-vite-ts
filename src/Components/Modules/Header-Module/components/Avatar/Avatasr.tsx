import React from 'react';
import './avatars.css';

import AvatarImage from '../../../../../assets/images/userIcon.svg';
import Avatar from '../../../../UI/Avatar/Avatar';
import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';

export default function Avatars() {
  return (
    <div className="AvatarsMain">
      <div className="AvatarsMainIcons">
        <Avatar imageUrl={AvatarImage} avatar="default" />
      </div>

      <P size="small" weight="bold" className="AvatarsMainTextStyle">
        Wawan Purwanto
      </P>
      <Arrow position="bottom" />
    </div>
  );
}
