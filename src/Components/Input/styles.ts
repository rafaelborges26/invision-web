import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  input {
    width: 433px;
    height: 42px;
    margin-bottom: 18px;
    padding: 15px;
    border: 1px solid #707070;
    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #ffffff;
    text-align: center;

    &:before {
      border-color: #c53030 transparent;
      margin-left: auto;
    }
  }
`;
