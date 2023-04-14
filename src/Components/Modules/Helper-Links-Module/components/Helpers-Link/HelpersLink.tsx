import React from 'react';
import './helpersLink.css';

import Groups from '../Groups/Groups';
import Events from '../Events/Events';
import FollowedHashtag from '../Followed-Hashtag/FollowedHashtag';
import { useAppSelector } from '../../../../../hook/UseRedux';
import {
  GroupName,
  Hashtags,
  IHelperLinkModel,
} from '../../model/helperLinkModel';
import { HelperLinkType } from '../../store/helperLinks';

export default function HelpersLink() {
  const helperLinkData: HelperLinkType | IHelperLinkModel = useAppSelector(
    (state) => state.helperLinks
  );

  const groups: GroupName[] | any = helperLinkData.helperLinkData[0]?.groupName;
  const events = helperLinkData.helperLinkData[1]?.event;
  const hashtags: Hashtags[] | any = helperLinkData.helperLinkData[2]?.hashtags;
  return (
    <div className="HelpersLinkMain">
      <Groups groups={groups} />

      <Events eventsDate={events} />

      <FollowedHashtag hashtags={hashtags} />
    </div>
  );
}
