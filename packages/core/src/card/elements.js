import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

const DefaultCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lighter};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: 0.5s all;
  border-radius: ${({ theme }) => theme.radius};
  width: 100%;

  ${color}
  ${space}
  ${layout}

  &:hover {
    box-shadow: ${({ noHover, theme }) => (noHover ? theme.shadow : theme.shadowHover)};
    transition: 0.5s all;
  }
`;

const CardHeaderContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  padding: 0.75rem 1.25rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${({ theme }) => theme.colors.lighter};
`;

const HeaderTitle = styled.h5`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0 0 0;
  color: ${({ theme }) => theme.colors.default};
`;

const HeaderSubtitle = styled.h6`
  font-size: 0.625rem;
  text-transform: uppercase;
  margin: 4px 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightDark};
`;

const Body = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const Footer = styled.div`
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  background-color: ${({ theme }) => theme.colors.lighter};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
`;

export { DefaultCard, CardHeaderContainer, Body, Footer, HeaderTitle, HeaderSubtitle };
