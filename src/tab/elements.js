import styled from 'styled-components';

const DefaultTabs = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  background: transparent;
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  align-items: center;
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
  padding: 1.25rem 1rem 1.3125rem;
  margin-right: 10px;
  white-space: nowrap;

  &:hover {
    opacity: 1;
  }
  ${({ active, theme }) =>
    active
      ? `
        border-bottom: 2.5px solid ${theme.colors.secondary};
        opacity: 1;
      `
      : ''}
`;

const DefaultTabContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export { DefaultTabs, DefaultTab, DefaultTabContent };
