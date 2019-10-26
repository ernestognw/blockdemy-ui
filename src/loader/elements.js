import styled, { keyframes } from "styled-components";
import { space } from "styled-system";

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ size }) => (size ? `${size}px` : "35px")};
  height: ${({ size }) => (size ? `${size}px` : "35px")};
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => (size ? `${size}px` : "35px")};
    height: ${({ size }) => (size ? `${size}px` : "35px")};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.secondary} transparent
      transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  ${({ alignSelf }) =>
    alignSelf &&
    `
    align-self: ${alignSelf};
  `};

  ${space}
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { LoaderContainer, LoaderWrapper };
