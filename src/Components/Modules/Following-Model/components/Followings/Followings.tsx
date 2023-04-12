import React from 'react';
import './followings.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import Folliwing from '../../../../Components/Following/Folliwing';
import AvatarImage from '../../../../../assets/images/userIcon.svg';
import GreenText from '../../../../UI/GreenText/GreenText';

export default function Followings() {
  const [takeId1, setTakeId1] = React.useState<any>('');
  const [takeId2, setTakeId2] = React.useState<any>('');
  const [takeId3, setTakeId3] = React.useState<any>('');

  return (
    <div className="FollowingsMains">
      <div className="FollowingsMainsHeader">
        <P size="medium" weight="bold" className="FollowingsMainsHeaderTitle">
          Following
        </P>
        <Arrow position="right" />
      </div>
      <div className="FollowingsMainsContents">
        <Folliwing
          imageUrl={AvatarImage}
          textName="Jhon Robert"
          text="Product Designer at dsgn.id"
          onChange={(data) => setTakeId1(data)}
        />
      </div>
      <div className="FollowingsMainsContents">
        <Folliwing
          imageUrl={AvatarImage}
          textName="Jhon Robert"
          text="Product Designer at dsgn.id"
          onChange={(data) => setTakeId2(data)}
        />
      </div>
      <div className="FollowingsMainsContents">
        <Folliwing
          imageUrl={AvatarImage}
          textName="Jhon Robert"
          text="Product Designer at dsgn.id"
          onChange={(data) => setTakeId3(data)}
        />
      </div>
      <GreenText
        className="FollowingsMainsMoreItems"
        size="medium"
        weight="bold"
      >
        More Recomendation
      </GreenText>
    </div>
  );
}
