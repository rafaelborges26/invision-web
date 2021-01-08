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

    @media (max-width: 1940px) {
      width: 500px;
    }

    @media (max-width: 1680px) {
      width: 450px;
    }

    @media (max-width: 1680px) {
      width: 450px;
    }

    @media (max-width: 1485px) {
      width: 320px;
      height: 450px;
    }

    @media (max-width: 1260px) {
      width: 250px;
      height: 400px;
    }

    @media (max-width: 1160px) {
      width: 200px;
      height: 300px;
    }

    @media (max-width: 1030px) {
      width: 100px;
      height: 250px;
    }

    @media (max-width: 800px) {
      width: 80px;
      height: 180px;

      p {
        font-size: 15px;
        align-items: center;
      }

      h2 {
        font-size: 5px;
        align-items: center;
        margin: 10px;
        padding: 0 30px 0 30px;
      }
    }

    @media (max-width: 700px) {
      width: 50px;
      height: 150px;
    }
  }
`;
