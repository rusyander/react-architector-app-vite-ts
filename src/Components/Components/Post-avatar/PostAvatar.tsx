import React from 'react';

import './postAvatar.css';
import Avatar from '../../UI/Avatar/Avatar';
import P from '../../UI/P/P';
import FollowImage from '../../../assets/images/plusBlack.svg';

import UserImage from '../../../assets/images/userIcon.svg';

interface PostAvatarProps {
  imageUrl: string;
  textName: string;
  text: string;
  time: string;
  isFollowing?: boolean;
}

export default function PostAvatar({
  imageUrl,
  textName,
  text,
  time,
  isFollowing,
}: PostAvatarProps) {
  return (
    <div className="PostAvatarMain">
      <Avatar
        imageUrl={imageUrl == null ? UserImage : imageUrl}
        avatar="standart"
      />
      <div className="PostAvatarMainText">
        <P size="medium" className="PostAvatarMainTextName" weight="bold">
          {textName}
        </P>
        <P size="small" className="PostAvatarMainTextMiddle" weight="standart">
          {text}
        </P>
        <div className="PostAvatarMainTextFollowingShow">
          <P size="small" weight="standart">
            {time} ago
          </P>
          {isFollowing === true && (
            <div className="PostAvatarMainTextFollowing">
              <img
                src={FollowImage}
                alt="Follow"
                className="PostAvatarMainTextFollowingPadding"
              />
              <P size="small" weight="standart">
                Follow
              </P>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

PostAvatar.defaultProps = {
  isFollowing: false,
};
