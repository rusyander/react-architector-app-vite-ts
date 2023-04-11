import React from 'react';

import './profilViews.css';
import P from '../../UI/P/P';

interface ProfilViewsProps {
  views: string;
}

export default function ProfilViews({ views }: ProfilViewsProps) {
  return (
    <div className="ProfilViewsMain">
      <P weight="bold" size="medium" className="ProfilViewsTitle">
        Profile Views
      </P>
      <P weight="bold" size="medium" className="ProfilViewsCount">
        {views}+
      </P>
    </div>
  );
}
