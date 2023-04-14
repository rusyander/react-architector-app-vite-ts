import React from 'react';
import './userCarts.css';

import Avatar from '../../../../UI/Avatar/Avatar';
import P from '../../../../UI/P/P';
import Profil from '../Prifil/Profil';
import ProfilLink from '../Prifil-Link/ProfilLink';
import { useAppSelector } from '../../../../../hook/UseRedux';

export default function UserCarts() {
  const usersProfile = useAppSelector((state) => state.userProfile);
  return (
    <div className="UserCartsMain">
      <div className="UserCartsMainBgBlue">
        <div className="UserCartsMainContentsAvatar">
          <Avatar
            imageUrl={usersProfile.userProfile[0]?.userImage}
            avatar="main"
            text={usersProfile.userProfile[0]?.userName}
          />
        </div>
      </div>
      <div className="UserCartsMainContents">
        <P size="small" weight="standart" className="UserCartsMainContentsText">
          {usersProfile.userProfile[0]?.proffesion}
        </P>

        <Profil />

        <ProfilLink />
      </div>
    </div>
  );
}
