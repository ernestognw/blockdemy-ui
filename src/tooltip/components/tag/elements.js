import styled, { keyframes, css } from 'styled-components';

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const animationShow = css`
  animation: ${show} 0.2s linear;
`;

const Text = styled.pre`
  position: absolute;
  background: rgba(0, 0, 0, 0.85);
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.lighter};
  font-size: 0.8rem;
  z-index: 4000;
  padding: 10px;
  transform: translate(${({ x }) => x}px, ${({ y }) => y}px);
  margin: 0px;
  white-space: normal;
  width: max-content;
  max-width: 200px;
  text-align: ${({ align }) => align};

  ${animationShow}

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: solid 5px rgba(0, 0, 0, 0.85);
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;

    ${({ position }) => {
      switch (position) {
        case 'top':
          return `
            bottom: -5px;
            left: calc(50% - 5px);
          `;
        case 'bottom':
          return `
            top: -5px;
            left: calc(50% - 5px);
            transform: rotate(180deg);
          `;
        case 'left':
          return `
            right: -7px;
            top: calc(50% - 5px);
            transform: rotate(-90deg);
          `;
        case 'right':
          return `
            left: -7px;
            top: calc(50% - 5px);
            transform: rotate(90deg);
          `;
        default:
          return 'top: 100%;';
      }
    }}
  }
`;

export default Text;
