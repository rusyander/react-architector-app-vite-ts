/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './inputCheckbox.css';

export default function InputCheckbox() {
  return (
    <div>
      <label className="custom-checkbox">
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
  );
}
