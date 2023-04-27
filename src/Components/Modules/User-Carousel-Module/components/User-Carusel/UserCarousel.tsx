import React from 'react';
import './userCarousel.css';

import Avatar from '../../../../UI/Avatar/Avatar';

import { useAppSelector } from '../../../../../hook/UseRedux';

import Carousel from '../Carusel/Carousel';

export default function UserCarusel() {
  const carouselData = useAppSelector((state) => state.carousel);

  return (
    <div className="UserCaruselMain">
      <Carousel>
        {carouselData.carouselData?.map((carousel) => (
          <Avatar
            key={carousel.id}
            imageUrl={carousel.userImage}
            avatar="list"
            text={carousel.name}
          />
        ))}
      </Carousel>
    </div>
  );
}
