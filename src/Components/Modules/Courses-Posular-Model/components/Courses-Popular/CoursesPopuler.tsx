import React from 'react';
import './coursesPopular.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import GreenText from '../../../../UI/GreenText/GreenText';
import { useAppSelector } from '../../../../../hook/UseRedux';
import CoursesPopuler from '../../../../Components/Courses-Populer/CoursesPopuler';

export default function CoursesPopular() {
  const coursesPopulerData = useAppSelector((state) => state.coursesPopuler);

  return (
    <div className="CoursesPopularMains">
      <div className="CoursesPopularMainsHeader">
        <P
          size="medium"
          weight="bold"
          className="CoursesPopularMainsHeaderTitle"
        >
          Courses Populer
        </P>
        <Arrow position="right" />
      </div>

      <div className="CoursesPopularMainsContents">
        {coursesPopulerData.coursesPopulerData?.map((courses) => (
          <CoursesPopuler
            key={courses.id}
            coursesName={courses.coursName}
            createrName={courses.createrName}
            count={courses.count}
          />
        ))}
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
