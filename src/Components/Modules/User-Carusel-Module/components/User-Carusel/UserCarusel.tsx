import React from 'react';
import './userCarusel.css';

import Avatar from '../../../../UI/Avatar/Avatar';

import { useAppSelector } from '../../../../../hook/UseRedux';

import Carusel from './Carusel/Carusel';

export default function UserCarusel() {
  const carouselData = useAppSelector((state) => state.carousel);

  return (
    <div className="UserCaruselMain">
      <Carusel>
        {carouselData.carouselData?.map((carousel) => (
          <Avatar
            key={carousel.id}
            imageUrl={carousel.userImage}
            avatar="list"
            text={carousel.name}
          />
        ))}
      </Carusel>
    </div>
  );
}
