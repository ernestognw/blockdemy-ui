import styled from 'styled-components';
import { space, typography, position } from 'styled-system';
import { getStyle, getPadding, getFontSize, getBorderRadius } from './utils';

const PillContainer = styled.div`
  width: fit-content;
  padding: ${({ size }) => getPadding(size)};
  border-radius: ${({ size }) => getBorderRadius(size)};
  display: flex;
  align-items: center;
  font-size: ${({ size }) => getFontSize(size)};
  margin: 0;
  padding-top: 3px;
  text-transform: ${props => props.textTransform};
  font-weight: 500;

  ${typography}
  ${getStyle};
  ${space};
  ${position};
`;

export default PillContainer;
