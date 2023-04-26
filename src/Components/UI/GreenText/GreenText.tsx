import React from 'react';
import cn from 'classnames';
import './greenText.css';

interface GreenTextProps {
  size?: 'small' | 'medium' | 'large';
  weight?: 'standart' | 'bold';
  children: React.ReactNode;
  className?: string;
}

export default function GreenText({
  size,
  weight,
  children,
  className,
}: GreenTextProps) {
  return (
    <p
      data-testid="greenText"
      className={cn('greenText', className, {
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

GreenText.defaultProps = {
  size: 'small',
  weight: 'bold',
  className: '',
};
