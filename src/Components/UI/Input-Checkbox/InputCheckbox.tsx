/* eslint-disable no-param-reassign */
import React from 'react';
import './inputCheckbox.css';

interface InputCheckboxProps {
  checkeds: boolean;
  setChecked: (event: boolean) => void;
}

export default function InputCheckbox({
  checkeds,
  setChecked,
}: InputCheckboxProps) {
  const handleOnChange = () => {
    setChecked(!checkeds);
  };

  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checkeds} onChange={handleOnChange} />
      <span className="checkmark" />
    </label>
  );
}
