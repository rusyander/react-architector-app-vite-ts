import React from 'react';
import './avatars.css';

import Avatar from '../../../../UI/Avatar/Avatar';
import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import { UserState } from '../../model/UserModel';

export default function Avatars({ username, avatar }: UserState) {
  return (
    <div className="AvatarsMain">
      <div className="AvatarsMainIcons">
        <Avatar imageUrl={avatar} avatar="default" />
      </div>

      <P size="small" weight="bold" className="AvatarsMainTextStyle">
        {username}
      </P>
      <Arrow position="bottom" />
    </div>
  );
}
