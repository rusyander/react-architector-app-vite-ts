import React from 'react';

import './followersHashtag.css';
import P from '../../UI/P/P';

interface FollowersHashtagProps {
  followersName: string;
}

export default function FollowersHashtag({
  followersName,
}: FollowersHashtagProps) {
  return (
    <P weight="standart" size="small" className="FollowersHashtagTextStyle">
      {followersName}
    </P>
  );
}
