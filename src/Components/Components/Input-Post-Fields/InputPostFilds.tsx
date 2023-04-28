/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import React from 'react';
import cn from 'classnames';

import './inputPostFild.css';
import ImageIcons from '../../../assets/images/image.svg';
import SendIcons from '../../../assets/images/send.svg';
import InputFilds from '../../UI/Input-Filds/InputFilds';

interface InputPostFildsProps {
  placeholder?: string;
  onChange: (data: SubmitData) => void;
  size?: 'small' | 'medium' | 'large';
}

export interface SubmitData {
  text: string;
  image: File[];
}

export default function InputPostFilds({
  placeholder,
  onChange,
  size,
}: InputPostFildsProps) {
  const [textValue, setTextValue] = React.useState<string>('');
  const [fileValue, setFileValue] = React.useState<any[]>([]);

  function submitting() {
    if (textValue.length) {
      const submitData: SubmitData = {
        text: textValue,
        image: fileValue,
      };
      onChange(submitData);
    }
    setTextValue('');
    setFileValue([]);
  }

  const takeImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files: File[] | null | any = event.target.files;
    const filesArr = [];
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        filesArr.push(files[i]);
      }
      setFileValue(filesArr);
    }
  };

  return (
    <div
      className={cn('InputFildsStyling', {
        small: size === 'small',
        medium: size === 'medium',
        large: size === 'large',
      })}
    >
      <div className="InputFildsStylinInput">
        <InputFilds
          value={textValue}
          placeholder={placeholder}
          onChange={(e) => setTextValue(e.target.value)}
          params="post"
        />
      </div>

      <div className="InputFildsStylingIcons">
        <label htmlFor="fileInput">
          <img id="icon" src={ImageIcons} alt="fileDownloadIcon" />
        </label>
        <input
          id="fileInput"
          type="file"
          data-testid="fileInput"
          onChange={takeImage}
          accept="image/png, image/jpeg, image/gif, image/jpg"
          multiple
        />

        <button
          type="submit"
          aria-label="submit"
          className="buttonMain"
          onClick={submitting}
        >
          <img
            src={SendIcons}
            data-testid="submitIcon"
            className="buttonMainiImages"
          />
        </button>
      </div>
    </div>
  );
}

InputPostFilds.defaultProps = {
  size: 'small',
  placeholder: 'Placeholder text',
};
