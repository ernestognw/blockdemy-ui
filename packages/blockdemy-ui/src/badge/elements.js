import styled from 'styled-components';
import getPosition from './utils';

const Circle = styled.div`
  position: absolute;
  background-color: ${({ theme, color }) => theme.colors[color]};
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  ${getPosition}
`;

const Container = styled.div`
  position: relative;
`;

export { Circle, Container };
