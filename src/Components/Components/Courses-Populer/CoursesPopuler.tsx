import React from 'react';

import P from '../../UI/P/P';
import EyeImages from '../../../assets/images/eye.svg';
import './coursesPopuler.css';

interface CoursesPopulerProps {
  coursesName: string;
  createrName: string;
  count: string;
}

export default function CoursesPopuler({
  coursesName,
  createrName,
  count,
}: CoursesPopulerProps) {
  return (
    <div className="CoursesPopulerMain">
      <div>
        <P weight="bold" size="small">
          {coursesName}
        </P>
        <P
          weight="standart"
          className="CoursesPopulerMainPaddings"
          size="small"
        >
          {createrName}
        </P>
      </div>
      <div className="CoursesPopulerMainCounts">
        <img src={EyeImages} alt="" />
        <P
          weight="standart"
          className="CoursesPopulerMainPaddings"
          size="small"
        >
          {count}+
        </P>
      </div>
    </div>
  );
}
