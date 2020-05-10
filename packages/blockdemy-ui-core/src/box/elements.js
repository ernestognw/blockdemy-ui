import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  grid,
  border,
  background,
  position
} from 'styled-system';

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${grid}
  ${border}
  ${background}
  ${position}

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'inherit')}
`;

export default Box;
