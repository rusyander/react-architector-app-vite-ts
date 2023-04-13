import React from 'react';
import './groups.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import Group from '../../../../Components/Groups/Groups';
import GreenText from '../../../../UI/GreenText/GreenText';
import { GroupName } from '../../model/helperLinkModel';

interface GroupsProps {
  groups: GroupName[];
}

export default function Groups({ groups }: GroupsProps) {
  return (
    <div>
      <div className="GroupsHeader">
        <P size="medium" weight="bold" className="GroupsHeaderTitle">
          Groups
        </P>
        <Arrow position="right" />
      </div>
      {groups?.map((group) => {
        return (
          <div key={group.id} className="GroupsContent">
            <Group groupsName={group.groups} />
          </div>
        );
      })}

      <GreenText size="medium" weight="bold" className="GroupsContentMore">
        More
      </GreenText>
    </div>
  );
}
