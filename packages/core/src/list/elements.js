import styled from 'styled-components';
import { space } from 'styled-system';

const DefaultList = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-y: auto;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  padding: 11px 0px;
  justify-content: flex-start;
  text-decoration: none;

  ${space}

  ${({ clickable }) => (clickable ? 'cursor: pointer;' : '')}
`;

const ItemTextContainer = styled.div`
  flex: 1 1 auto;
  padding: 0 16px;
  min-width: 0;
`;

const PrimaryText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.default};
`;

const SecondaryText = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export { DefaultList, Item, ItemTextContainer, PrimaryText, SecondaryText };
