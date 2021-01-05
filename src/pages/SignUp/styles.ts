import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-content: center;
  position: relative;
  height: 100%;
`;

export const Slider = styled.div`
  background-color: #a9c5ba;
  display: flex;
  width: 50%;
`;

export const SliderImg = styled.div`
  img {
    margin: 112px 128px 31px 127px;
  }
`;

export const SliderTexts = styled.div`
  align-content: center;
  text-align: center;
  max-width: 553px;
  opacity: 1;
  position: relative;
  h2 {
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 20px;
    font-weight: 200;
    opacity: 1;
  }

  p {
    font-size: 20px;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 50%;
`;

export const HeaderContent = styled.div`
  margin: 120px 46px 73px 0;
  display: flex;
  width: 100%;
`;

export const Logo = styled.div`
  color: #000000;
  font-size: 35px;
  text-align: left;
  opacity: 1;
  margin-left: auto;
  margin-right: 46px;
`;

export const ContentLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 30px;
    letter-spacing: 0px;
    opacity: 1;
    font-weight: normal;
    margin-bottom: 50px;
  }

  span {
    font-size: 14px;
    margin-left: 320px;
    margin-bottom: 30px;
  }

  button {
    width: 175px;
    height: 45px;
    border-radius: 100px;
    background: #707070;
    color: #ffffff;
    margin-top: 41px;
  }
`;

export const ContentLoginForm = styled.div`
  p {
    font-size: 14px;
    text-align: left;
    letter-spacing: 0px;
    opacity: 1;
    align-items: initial;
  }
`;

export const ContentOR = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 49px;

  hr {
    width: 150px;
    height: 1px;
    opacity: 1;
    color: #707070;
  }

  p {
    margin: 0 8px;
    font-size: 18px;
    opacity: 1;
    letter-spacing: 0px;
  }
`;

export const ButtonLoginGoogle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  align-content: center;
  background: #ffffff;
  width: 263px;
  height: 45px;
  border-radius: 100px;
  margin-top: 46px;

  button {
    border: none;
    background: #ffffff;
    margin-bottom: 5px;
    border-radius: 100px;
  }

  img {
    width: 29px;
    height: 28px;
    background: #ffffff;
  }

  span {
    color: #000000;
    font-size: 18px;
    margin-left: 10px;
  }
`;

export const CreateAccount = styled.div`
  margin-top: 40px;
  margin-bottom: 120px;
  text-align: center;
  p {
    font-size: 14px;
    letter-spacing: 0px;
  }

  a {
    color: #a9c5ba;
    font-size: 16px;
  }
`;

export const LoginAccount = styled.div`
  margin-top: 10px;
  text-align: center;
  p {
    font-size: 14px;
    letter-spacing: 0px;
  }

  a {
    color: #a9c5ba;
    font-size: 16px;
  }
`;
