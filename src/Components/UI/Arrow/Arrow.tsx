import React from 'react';
import cn from 'classnames';

import './arrow.css';
import ArrowIcon from '../../../assets/images/left.svg';

interface IArrowProps {
  position: 'left' | 'right' | 'top' | 'bottom';
}

export default function Arrow({ position }: IArrowProps) {
  return (
    <div className="ArrowBlock">
      <img
        alt-label="arrow"
        src={ArrowIcon}
        alt="icons-arrow"
        className={cn('Arrow', {
          'Arrow--left': position === 'left',
          'Arrow--right': position === 'right',
          'Arrow--top': position === 'top',
          'Arrow--bottom': position === 'bottom',
        })}
      />
    </div>
  );
}
