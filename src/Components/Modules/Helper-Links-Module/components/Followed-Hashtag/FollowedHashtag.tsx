import React from 'react';
import './followedHashtag.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import FollowersHashtag from '../../../../Components/Followers-Hashtag/FollowersHashtag';
import { Hashtags } from '../../model/helperLinkModel';

interface FollowedHashtagProps {
  hashtags: Hashtags[];
}

export default function FollowedHashtag({ hashtags }: FollowedHashtagProps) {
  return (
    <div className="FollowedHashtagsMain">
      <div className="FollowedHashtagsMainHeader">
        <P size="medium" weight="bold" className="FollowedHashtagsMainTitle">
          Event
        </P>
        <Arrow position="right" />
      </div>
      <div className="FollowedHashtagsMainLinkss">
        {hashtags?.map((hashtag: Hashtags) => (
          <FollowersHashtag key={hashtag.id} followersName={hashtag.hashtag} />
        ))}
      </div>
    </div>
  );
}
