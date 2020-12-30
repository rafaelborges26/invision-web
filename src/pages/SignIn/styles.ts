import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-content: center;
`;

export const Slider = styled.div`
  background: '#A9C5BA';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
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
`;

export const Logo = styled.text`
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

  h1 {
    font-size: 30px;
    letter-spacing: 0px;
    opacity: 1;
    font-weight: normal;
    margin-bottom: 87px;
  }

  input {
    width: 433px;
    height: 42px;
    margin-bottom: 18px;
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

  margin-top: 40px;
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

export const ButtonLoginGoogle = styled.button`
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
  p {
    font-size: 14px;
    letter-spacing: 0px;
  }

  a {
    color: #a9c5ba;
    font-size: 16px;
  }
`;
