import React from 'react';
import './coursesPopular.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import GreenText from '../../../../UI/GreenText/GreenText';
import CoursesPopuler from '../../../../Components/Courses-Populer/CoursesPopuler';

export default function CoursesPopular() {
  return (
    <div className="CoursesPopularMains">
      <div className="CoursesPopularMainsHeader">
        <P
          size="medium"
          weight="bold"
          className="CoursesPopularMainsHeaderTitle"
        >
          Following
        </P>
        <Arrow position="right" />
      </div>

      <div className="CoursesPopularMainsContents">
        <CoursesPopuler
          coursesName="Learning UX Design - Mobile apps"
          createrName="Thomas Wick"
          count="500"
        />
        <CoursesPopuler
          coursesName="Learning UX Design - Mobile apps"
          createrName="Thomas Wick"
          count="500"
        />
        <CoursesPopuler
          coursesName="Learning UX Design - Mobile apps"
          createrName="Thomas Wick"
          count="500"
        />
        <CoursesPopuler
          coursesName="Learning UX Design - Mobile apps"
          createrName="Thomas Wick"
          count="500"
        />
      </div>

      <GreenText
        className="CoursesPopularMainsMoreItems"
        size="medium"
        weight="bold"
      >
        More Recomendation
      </GreenText>
    </div>
  );
}
