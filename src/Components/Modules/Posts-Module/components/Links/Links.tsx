import React from 'react';
import './link.css';

import UserPostIcons from '../../../../UI/User-Post-Icons/UserPostIcons';
import LikeIcon from '../../../../../assets/images/like.svg';
import ComentsIcon from '../../../../../assets/images/coments.svg';
import SavedIcon from '../../../../../assets/images/saved-black.svg';
import SendIcon from '../../../../../assets/images/send.svg';
import SharedIcon from '../../../../../assets/images/shared.svg';

export default function Links() {
  return (
    <div className="LinksMainComponents">
      <UserPostIcons imageUrl={LikeIcon} text="Like" />
      <UserPostIcons imageUrl={ComentsIcon} text="Comment" />
      <UserPostIcons imageUrl={SavedIcon} text="Saved" />
      <UserPostIcons imageUrl={SendIcon} text="Send" />
      <UserPostIcons imageUrl={SharedIcon} text="Share" />
    </div>
  );
}
