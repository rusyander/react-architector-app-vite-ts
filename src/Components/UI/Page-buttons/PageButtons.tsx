import React from 'react';
import { NavLink } from 'react-router-dom';
import './pageButtons.css';

import HomeIcon from '../../../assets/images/homeIcon.svg';

interface PageButtonsProps {
  value: string;
  url: string;
}

export default function PageButtons({
  value,
  url,
}: PageButtonsProps): JSX.Element {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive ? 'pageButtonsActive' : 'pageButtonsNotActive'
      }
    >
      <button type="button">
        <img src={value == null ? HomeIcon : value} alt="" />
      </button>
    </NavLink>
  );
}
