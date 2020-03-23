import styled from 'styled-components';

const DefaultTable = styled.table`
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 12px;
  width: 100%;
`;

const Head = styled.thead`
  background-color: ${props => props.theme.colors.veryLightGrey};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  font-weight: 600;
`;

const Row = styled.tr`
  color: inherit;
  height: 48px;
  display: table-row;
  outline: none;
  vertical-align: middle;
  position: relative;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  &:last-child {
    border-bottom: none;
  }

  ${props => (props.clickable ? 'cursor: pointer;' : '')}
`;

const Cell = styled.td`
  display: table-cell;
  padding: 6px 16px;
  text-align: ${props => props.align || 'left'};
  vertical-align: inherit;

  ${props => (props.clickable ? 'cursor: pointer;' : '')}
`;

const Body = styled.tbody``;

export { DefaultTable, Head, Row, Cell, Body };
