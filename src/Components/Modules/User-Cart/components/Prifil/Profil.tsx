import React from 'react';
import './profil.css';

import ProfilViews from '../../../../Components/Profil-Views/ProfilViews';
import ProfilePosts from '../../../../Components/Profile-Posts/ProfilePosts';

export default function Profil() {
  return (
    <div className="UserCartsMainProfile">
      <ProfilViews views="16" />
      <ProfilePosts views="500" />
    </div>
  );
}
