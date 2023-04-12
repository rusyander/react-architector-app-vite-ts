import React from 'react';
import './message.css';

import MessageIcon from '../../../../../assets/images/message.svg';
import P from '../../../../UI/P/P';

export default function Message() {
  return (
    <div className="MessageMainModule">
      <img src={MessageIcon} alt="" />
      <P size="medium" weight="bold" className="MessageMainModuleText">
        Message
      </P>
    </div>
  );
}
