import styled from 'styled-components';
import { space, layout, color, typography, flexbox, grid, border } from 'styled-system';

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${grid}
  ${border}

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'inherit')}
`;

export default Box;
