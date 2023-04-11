import React from 'react';
import cn from 'classnames';
import './p.css';

interface IProps {
  size?: 'small' | 'medium' | 'large';
  weight?: 'standart' | 'bold';
  children: React.ReactNode;
  className?: string;
}

export default function P({ size, weight, children, className }: IProps) {
  return (
    <p
      className={cn('pText', 'pMain', className, {
        small: size === 'small',
        medium: size === 'medium',
        large: size === 'large',
        standart: weight === 'standart',
        bold: weight === 'bold',
      })}
    >
      {children}
    </p>
  );
}

P.defaultProps = {
  size: 'small',
  weight: 'standart',
  className: '',
};
