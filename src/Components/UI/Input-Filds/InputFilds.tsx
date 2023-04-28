/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './inputFilds.css';
import cn from 'classnames';

import SearchIcons from '../../../assets/images/search.svg';

interface InputFildsProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
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
          className={cn('InputFildsInput', {
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
            className={cn('InputFildsInputSearch', {
              small: size === 'small',
              medium: size === 'medium',
              large: size === 'large',
            })}
            data-testid="input-search"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      )}

      {params === 'post' && (
        <input
          className={cn('InputFildsInputPost', {
            small: size === 'small',
            medium: size === 'medium',
            large: size === 'large',
          })}
          data-testid="input-post"
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
  placeholder: 'My placeholder',
};
