import styled from 'styled-components';

const LayoutContent = styled.div`
  padding-top: 66px;
  transition: all 0.3s ease;

  ${props => props.theme.media.tablet`
    padding-left: 0;
  `}
`;

export { LayoutContent };
