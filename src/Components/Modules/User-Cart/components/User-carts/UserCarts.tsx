import React from 'react';
import './userCarts.css';

import AvatarImage from '../../../../../assets/images/userIcon.svg';
import Avatar from '../../../../UI/Avatar/Avatar';
import P from '../../../../UI/P/P';
import Profil from '../Prifil/Profil';
import ProfilLink from '../Prifil-Link/ProfilLink';

export default function UserCarts() {
  return (
    <div className="UserCartsMain">
      <div className="UserCartsMainBgBlue">
        <div className="UserCartsMainContentsAvatar">
          <Avatar imageUrl={AvatarImage} avatar="main" text="Wawan Purwanto" />
        </div>
      </div>
      <div className="UserCartsMainContents">
        <P size="small" weight="standart" className="UserCartsMainContentsText">
          I have experince 1 year UI/UX Design
        </P>

        <Profil />

        <ProfilLink />
      </div>
    </div>
  );
}
