import styled from "styled-components";
import { space } from "styled-system";

const List = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-y: auto;
`;

const ListItem = styled.div`
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
`;

const ListItemTextContainer = styled.div`
  flex: 1 1 auto;
  padding: 0 16px;
  min-width: 0;
`;

const ListPrimaryText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.default};
`;

const ListSecondaryText = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export {
  List,
  ListItem,
  ListItemTextContainer,
  ListPrimaryText,
  ListSecondaryText
};
