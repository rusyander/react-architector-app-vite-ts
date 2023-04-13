import React from 'react';
import './helpersLink.css';

import Groups from '../Groups/Groups';
import Events from '../Events/Events';
import FollowedHashtag from '../Followed-Hashtag/FollowedHashtag';
import { useAppSelector } from '../../../../../hook/UseRedux';
import { GroupName, IHelperLinkModel } from '../../model/helperLinkModel';
import { HelperLinkType } from '../../store/helperLinks';

export default function HelpersLink() {
  const helperLinkData: HelperLinkType | IHelperLinkModel = useAppSelector(
    (state) => state.helperLinks
  );
  const groups: GroupName[] = helperLinkData.helperLinkData[0]?.groupName;
  return (
    <div className="HelpersLinkMain">
      <Groups groups={groups} />

      <Events />

      <FollowedHashtag />
    </div>
  );
}
