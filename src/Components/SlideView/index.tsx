import { settings } from 'cluster';
import React, { Component } from 'react';
import Slider from 'react-slick';
import imgSlider from '../../assets/Data.png';
import { Wrapper, Page } from './styled';

const SliderView: React.FC = () => {
  return (
    <Wrapper>
      <Slider speed={500} slidesToShow={1} slidesToScroll={1} dots infinite>
        <div>
          <img src={imgSlider} alt="" />
          <p>teste</p>
        </div>
        <div>
          <h3>div two</h3>
        </div>
      </Slider>
    </Wrapper>
  );
};

export default SliderView;
