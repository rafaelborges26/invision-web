import { settings } from 'cluster';
import React, { Component } from 'react';
import Slider from 'react-slick';
import imgSlider from '../../assets/Data.png';
import imgTeste from '../../assets/students_partner_work-male-male.svg';
import { Wrapper, Page } from './styles';

const SliderView: React.FC = () => {
  return (
    <Wrapper>
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        adaptiveHeight
        centerMode
      >
        <Page>
          <img src={imgSlider} alt="Marcenas mattis egestas" />
          <h2>Marcenas mattis egestas</h2>
          <p>Erdum et malesuada fames ac ante ileum primmer in</p>
          <p> faucibus uspendisse porta.</p>
        </Page>
        <Page>
          <h2>Testing</h2>
          <p>Testing the slideView.</p>
        </Page>
      </Slider>
    </Wrapper>
  );
};

export default SliderView;
