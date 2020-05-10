import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateX(-400px);
  }

  to {
    transform: translateX(0);
  }
`;

const SidebarContainer = styled.div`
  background-color: ${props => props.theme.colors.default};
  width: 180px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: all 0.3s ease;

  ${props => props.theme.media.tablet`
    top: 66px;
    background-color: ${props.theme.colors.default}
    width: ${64}px;
    animation: ${fadeIn} 0.5s ease;
    display: initial;
  `}
`;

const Route = styled.div`
  display: flex;
  cursor: pointer;
  padding-left: 20px;
  align-items: center;
  color: ${props => props.theme.colors.lighter};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  ${props =>
    props.active &&
    `
    color: ${props.theme.colors.primary}; 
  `}

  p {
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const RouteTitle = styled(Route)`
  color: ${props => props.theme.colors.lightGrey};
  
  &:hover {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  height: 100%;

  p {
    visibility: initial;
    margin-right: auto;
    min-width: 300px;
  }
`;

export { SidebarContainer, Route, RouteTitle, RoutesContainer };
