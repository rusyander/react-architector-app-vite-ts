import React from 'react';
import './followedHashtag.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import FollowersHashtag from '../../../../Components/Followers-Hashtag/FollowersHashtag';

export default function FollowedHashtag() {
  return (
    <div className="FollowedHashtagsMain">
      <div className="FollowedHashtagsMainHeader">
        <P size="medium" weight="bold" className="FollowedHashtagsMainTitle">
          Event
        </P>
        <Arrow position="right" />
      </div>
      <div className="FollowedHashtagsMainLinkss">
        <FollowersHashtag followersName="#UIDesign" />
        <FollowersHashtag followersName="#UIDesign" />
        <FollowersHashtag followersName="#UIDesign" />
        <FollowersHashtag followersName="#UIDesign" />
        <FollowersHashtag followersName="#UIDesign" />
        <FollowersHashtag followersName="#UIDesign" />
        <FollowersHashtag followersName="#UIDesign" />
        <FollowersHashtag followersName="#UIDesign" />
      </div>
    </div>
  );
}
