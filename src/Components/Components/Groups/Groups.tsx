import React from 'react';

import GroupsImage from '../../../assets/images/groups.svg';
import './group.css';
import P from '../../UI/P/P';

interface GroupsProps {
  groupsName: string;
}

export default function Groups({ groupsName }: GroupsProps) {
  return (
    <div className="GroupsMain">
      <img src={GroupsImage} alt="groupsImage" />
      <P weight="standart" size="small" className="GroupsMainText">
        {groupsName}
      </P>
    </div>
  );
}
