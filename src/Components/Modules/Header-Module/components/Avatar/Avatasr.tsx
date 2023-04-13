import React from 'react';
import './avatars.css';

import Avatar from '../../../../UI/Avatar/Avatar';
import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import { useAppSelector } from '../../../../../hook/UseRedux';

export default function Avatars() {
  const userList = useAppSelector((state) => state.user);

  return (
    <div className="AvatarsMain">
      <div className="AvatarsMainIcons">
        <Avatar imageUrl={userList.user[0]?.avatar} avatar="default" />
      </div>

      <P size="small" weight="bold" className="AvatarsMainTextStyle">
        {userList.user[0]?.username}
      </P>
      <Arrow position="bottom" />
    </div>
  );
}
