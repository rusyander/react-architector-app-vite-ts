import React from 'react';

import './navigations.css';
import PageButtons from '../../../../UI/Page-buttons/PageButtons';

import HomeIcons from '../../../../../assets/images/homeIcon.svg';
import SosialIcons from '../../../../../assets/images/people.svg';
import WorkIcons from '../../../../../assets/images/work.svg';
import ChatIcons from '../../../../../assets/images/chat.svg';
import BellIcons from '../../../../../assets/images/bell.svg';

export default function Navigations() {
  return (
    <div className="NavigationsMain">
      <PageButtons value={HomeIcons} url="/" />
      <PageButtons value={SosialIcons} url="/sosial" />
      <PageButtons value={WorkIcons} url="/work" />
      <PageButtons value={ChatIcons} url="/chat" />
      <PageButtons value={BellIcons} url="/bell" />
    </div>
  );
}
