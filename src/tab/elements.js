import styled from 'styled-components';
import { typography } from 'styled-system';
import getPadding from './utils';

const DefaultTabs = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  background: transparent;
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  align-items: center;
  ${typography};
`;

const DefaultTab = styled.div`
  color: ${({ theme }) => theme.colors.default};
  opacity: 0.7;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  white-space: nowrap;

  ${getPadding}

  &:hover {
    opacity: 1;
  }

  ${({ active, theme, color }) =>
    active
      ? `
        border-bottom: 2.5px solid ${theme.colors[color]};
        opacity: 1;
      `
      : ''}
`;

const DefaultTabContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export { DefaultTabs, DefaultTab, DefaultTabContent };
