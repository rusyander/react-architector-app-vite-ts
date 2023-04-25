import React from 'react';
import './form.css';

import Avatar from '../../../../UI/Avatar/Avatar';
import UserImage from '../../../../../assets/images/userIcon.svg';
import InputFilds from '../../../../UI/Input-Filds/InputFilds';

export default function Form() {
  const [postValue, setPostValue] = React.useState<string>('');
  return (
    <div className="FormsMain">
      <Avatar imageUrl={UserImage} avatar="standart" />
      <div className="FormsMainInputs">
        <InputFilds
          value={postValue}
          placeholder="Start a post"
          onChange={(e) => setPostValue(e.target.value)}
          size="large"
          params="post"
        />
      </div>
    </div>
  );
}
