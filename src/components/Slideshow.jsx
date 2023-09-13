import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slideshow.css';

export const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://swapps.com/wp-content/uploads/2022/07/banner-4.png"
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/125d4b_75d7cfdc61dc4acbac36ae11ed81790b~mv2.jpg/v1/fill/w_1349,h_567,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/125d4b_75d7cfdc61dc4acbac36ae11ed81790b~mv2.jpg"
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/125d4b_c41e57b6c6014b808f5021fe504e8a22~mv2.jpg/v1/fill/w_1349,h_567,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/125d4b_c41e57b6c6014b808f5021fe504e8a22~mv2.jpg"
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};


