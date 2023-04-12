import React from 'react';
import './userForm.css';

import UserImage from '../../../../../assets/images/userIcon.svg';
import Avatar from '../../../../UI/Avatar/Avatar';
import InputPostFilds from '../../../../Components/Input-Post-Fields/InputPostFilds';

export default function UserForm() {
  const [formValue, setFormValue] = React.useState<any>([]);
  return (
    <div className="UserFormsMain">
      <div className="UserFormsMainImages">
        <Avatar imageUrl={UserImage} avatar="default" />
      </div>

      <InputPostFilds
        placeholder="Start a post"
        onChange={(data) => setFormValue(data)}
        size="small"
      />
    </div>
  );
}
