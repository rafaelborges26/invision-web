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
  margin-left: auto;
  align-content: center;
  text-align: center;
  opacity: 1;
  display: flex;

  h2 {
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 30px;
    margin-top: 30px;
    font-weight: 200;
    opacity: 1;
  }

  p {
    font-size: 20px;
    color: #ffffff;
  }

  img {
    align-content: center;
    align-items: center;
    top: 112px;
    left: 127px;
    width: 670px;
    height: 555px;
  }
`;
