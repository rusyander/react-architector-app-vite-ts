import React from 'react';
import './followings.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import Folliwing from '../../../../Components/Following/Folliwing';
import GreenText from '../../../../UI/GreenText/GreenText';
import { useAppSelector } from '../../../../../hook/UseRedux';

export default function Followings() {
  const followingData = useAppSelector((state) => state.following);

  const [takeId1, setTakeId1] = React.useState<any>('');

  return (
    <div className="FollowingsMains">
      <div className="FollowingsMainsHeader">
        <P size="medium" weight="bold" className="FollowingsMainsHeaderTitle">
          Following
        </P>
        <Arrow position="right" />
      </div>
      {followingData.followingData?.map((following) => (
        <div className="FollowingsMainsContents" key={following.id}>
          <Folliwing
            imageUrl={following.userImage}
            textName={following.userName}
            text={following.proffesion}
            onChange={(data) => setTakeId1(data)}
          />
        </div>
      ))}

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
