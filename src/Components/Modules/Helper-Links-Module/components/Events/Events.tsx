import React from 'react';
import './events.css';

import P from '../../../../UI/P/P';
import Arrow from '../../../../UI/Arrow/Arrow';
import Event from '../../../../Components/Event/Events';

interface EventsProps {
  eventsDate: string;
}

export default function Events({ eventsDate }: EventsProps) {
  return (
    <div className="EventsMains">
      <div className="EventHeader">
        <P size="medium" weight="bold" className="EventHeaderTitle">
          Event
        </P>
        <Arrow position="right" />
      </div>

      <div className="EventsDatas">
        <Event eventsDate={eventsDate} />
      </div>
    </div>
  );
}
