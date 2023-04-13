import React from 'react';
import './profil.css';

import ProfilViews from '../../../../Components/Profil-Views/ProfilViews';
import ProfilePosts from '../../../../Components/Profile-Posts/ProfilePosts';
import { useAppSelector } from '../../../../../hook/UseRedux';

export default function Profil() {
  const usersProfile = useAppSelector((state) => state.userProfile);
  return (
    <div className="UserCartsMainProfile">
      <ProfilViews views={usersProfile.userProfile[0]?.profileViews} />
      <ProfilePosts views={usersProfile.userProfile[0]?.profilePost} />
    </div>
  );
}
