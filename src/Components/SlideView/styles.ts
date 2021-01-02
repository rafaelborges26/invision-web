import styled from 'styled-components';

export const Wrapper = styled.div`
  //display: flex;
  align-content: center;
  //justify-content: left;
  //align-content: left;
  align-items: flex-start;
  position: absolute;
  height: 15%;
  width: 50%;
`;

export const Page = styled.div`
  //width: 10%;
  //height: 50px;
  margin-left: auto;
  //margin-right: 0px;

  align-content: center;
  text-align: center;
  max-width: 553px;
  opacity: 1;

  h2 {
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 20px;
    margin-top: 30px;
    font-weight: 200;
    opacity: 1;
  }

  p {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 30px;
  }

  img {
    top: 112px;
    left: 127px;
    width: 705px;
    height: 555px;
  }
`;
