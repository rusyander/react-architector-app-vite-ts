import React from 'react';
import './inputFilds.css';
import cn from 'classnames';

import SearchIcons from '../../../assets/images/search.svg';

interface InputFildsProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  params?: 'search' | 'post' | 'profile';
}

export default function InputFilds({
  type,
  placeholder,
  value,
  onChange,
  size,
  params,
}: InputFildsProps) {
  return (
    <div className="InputFilds">
      {params === 'profile' && (
        <input
          className={cn('InputFilds__input', {
            small: size === 'small',
            medium: size === 'medium',
            large: size === 'large',
          })}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {params === 'search' && (
        <div className="InputFildsSearch">
          <img
            src={SearchIcons}
            alt="search"
            className="InputFildsSearchIcons"
          />
          <input
            className={cn('InputFilds__input__Search', {
              small: size === 'small',
              medium: size === 'medium',
              large: size === 'large',
            })}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      )}

      {params === 'post' && (
        <input
          className={cn('InputFilds__input__Post', {
            small: size === 'small',
            medium: size === 'medium',
            large: size === 'large',
          })}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

InputFilds.defaultProps = {
  type: 'text',
  size: 'small',
  params: 'profile',
};
