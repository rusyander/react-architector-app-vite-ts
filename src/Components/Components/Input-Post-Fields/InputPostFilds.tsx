import React, { useState } from 'react';
import cn from 'classnames';

import './inputPostFild.css';
import ImageIcons from '../../../assets/images/image.svg';
import SendIcons from '../../../assets/images/send.svg';
import InputFilds from '../../UI/Input-Filds/InputFilds';

interface InputPostFildsProps {
  placeholder: string;
  onChange: (data: SubmitData) => void;
  size?: 'small' | 'medium' | 'large';
}

export interface SubmitData {
  text: string;
  image: string | null;
}

export default function InputPostFilds({
  placeholder,
  onChange,
  size,
}: InputPostFildsProps) {
  const [textValue, setTextValue] = React.useState<string>('');
  const [fileValue, setFileValue] = React.useState<string>('');

  function submitting() {
    if (textValue.length) {
      const submitData: SubmitData = {
        text: textValue,
        image: fileValue === null ? null : fileValue,
      };
      onChange(submitData);
    }
    setTextValue('');
    setFileValue('');
  }

  const onChanges = (event: any) => {
    setFileValue(event.target.files);
  };

  return (
    <div
      className={cn('InputFilds__Styling', {
        small: size === 'small',
        medium: size === 'medium',
        large: size === 'large',
      })}
    >
      <div className="InputFilds__Styling__Input">
        <InputFilds
          value={textValue}
          placeholder={placeholder}
          onChange={(e) => setTextValue(e.target.value)}
          params="post"
        />
      </div>

      <div className="InputFilds__Styling__Icons">
        <label htmlFor="fileInput">
          <img id="icon" src={ImageIcons} alt="asd" />
        </label>
        <input
          id="fileInput"
          type="file"
          onChange={onChanges}
          accept="image/png, image/jpeg, image/gif, image/jpg"
          multiple
        />

        <button type="submit" className="buttonMain" onClick={submitting}>
          <img src={SendIcons} alt="asd" className="buttonMainiImages" />
        </button>
      </div>
    </div>
  );
}

InputPostFilds.defaultProps = {
  size: 'small',
};
