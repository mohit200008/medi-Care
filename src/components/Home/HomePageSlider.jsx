import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../assets/home/slider1.png';
import image2 from '../../assets/home/slider2.png';
import image3 from '../../assets/home/slider3.png';

export default function HomePageSlider() {
    return (
        <Carousel fade={true} className='carousel'>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}
