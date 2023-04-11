import React from 'react';

import './devider.css';
import P from '../../UI/P/P';

export default function Devider() {
  return (
    <div className="DeviderMain">
      <P size="medium" className="DeviderMainText" weight="standart">
        News
      </P>
      <div className="DeviderMainLine" />
      <P size="medium" className="DeviderMainText" weight="standart">
        Popular
      </P>
    </div>
  );
}
