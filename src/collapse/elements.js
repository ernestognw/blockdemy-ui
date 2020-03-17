import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';

const AnimateCollapse = styled(AnimateHeight)`
  transition: height 0.2s ease, opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  .rah-animating--to-height-zero: {
    opacity: 0;
    transform: translateY(-0.625rem);
  }
`;

export default AnimateCollapse;
