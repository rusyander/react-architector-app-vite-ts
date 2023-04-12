import React from 'react';
import './helpersLink.css';

import Groups from '../Groups/Groups';
import Events from '../Events/Events';
import FollowedHashtag from '../Followed-Hashtag/FollowedHashtag';

export default function HelpersLink() {
  return (
    <div className="HelpersLinkMain">
      <Groups />

      <Events />

      <FollowedHashtag />
    </div>
  );
}
