import React from 'react';
import './groups.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import Group from '../../../../Components/Groups/Groups';
import GreenText from '../../../../UI/GreenText/GreenText';

export default function Groups() {
  return (
    <div>
      <div className="GroupsHeader">
        <P size="medium" weight="bold" className="GroupsHeaderTitle">
          Groups
        </P>
        <Arrow position="right" />
      </div>
      <div className="GroupsContent">
        <Group groupsName="UI/UX Design" />
      </div>
      <div className="GroupsContent">
        <Group groupsName="UI  Design" />
      </div>
      <div className="GroupsContent">
        <Group groupsName="UI  Design" />
      </div>
      <GreenText size="medium" weight="bold" className="GroupsContentMore">
        More
      </GreenText>
    </div>
  );
}
