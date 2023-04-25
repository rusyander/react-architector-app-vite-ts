/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import './carousel.css';

import { Carousel } from 'react-responsive-carousel';

import Arrow from '../../../../../UI/Arrow/Arrow';

interface CaruselProps {
  //   children: React.ReactNode;
  children: any;
}

interface CarouselProps {
  autoPlay: boolean;
  selectedItem: number;
  onChange: (index: number) => void;
  children: React.ReactNode;
}

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
};

export default function Carusel({ children }: CaruselProps | CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleToggleAutoPlay: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setAutoPlay(!autoPlay);
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const buttonStyle = {
    fontSize: 20,
    padding: '5px 20px',
    margin: '5px 0px',
  };

  function CustomArrowPrev({ onClickHandler }: any) {
    return (
      <div className="CustomArrowPrevIcons" onClick={onClickHandler}>
        {/* <FaChevronLeft size={30} /> */}
        <Arrow position="left" />
      </div>
    );
  }

  function CustomArrowNext({ onClickHandler }: any) {
    return (
      <div className="CustomArrowNextIcons" onClick={onClickHandler}>
        {/* <FaChevronRight size={30} /> */}
        <Arrow position="right" />
      </div>
    );
  }

  return (
    <div className="CaruselMainWidth">
      {/* <div>
        <p>External slide value: {currentSlide}</p>
        <button type="button" onClick={prevSlide} style={buttonStyle}>
          Prev
        </button>
        <button type="button" onClick={nextSlide} style={buttonStyle}>
          Next
        </button>
        <button
          type="button"
          onClick={handleToggleAutoPlay}
          style={buttonStyle}
        >
          Toggle Autoplay ({autoPlay ? 'true' : 'false'})
        </button>
      </div> */}
      <Carousel
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <CustomArrowPrev onClickHandler={onClickHandler} key="prev" />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <CustomArrowNext onClickHandler={onClickHandler} key="next" />
          )
        }
        autoPlay={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={10000}
        autoFocus={false}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        width="70px"
        axis="horizontal"
        infiniteLoop
        // showArrows={false}
      >
        {children}
      </Carousel>
    </div>
  );
}
