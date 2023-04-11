import React from 'react';

import CalendarImage from '../../../assets/images/calendar.svg';
import './events.css';
import P from '../../UI/P/P';

interface EventsProps {
  eventsDate: string;
}

export default function Events({ eventsDate }: EventsProps) {
  return (
    <div className="EventsMain">
      <img src={CalendarImage} alt="" />
      <P weight="standart" size="small" className="EventsMainText">
        {eventsDate}
      </P>
    </div>
  );
}
