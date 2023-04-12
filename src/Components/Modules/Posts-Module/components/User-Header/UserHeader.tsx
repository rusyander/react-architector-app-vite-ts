import React from 'react';
import './userHeader.css';

import UserImage from '../../../../../assets/images/userIcon.svg';
import Dots from '../../../../../assets/images/dots.png';

import PostAvatar from '../../../../Components/Post-avatar/PostAvatar';

export default function UserHeader() {
  return (
    <div className="UserHeadesrMain">
      <PostAvatar
        imageUrl={UserImage}
        textName="Julia Robert"
        text="Product Designer at lancar.id"
        time="1 hr"
        // isFollowing
      />

      <img src={Dots} className="UserHeadesrMainImages" alt="" />
    </div>
  );
}
