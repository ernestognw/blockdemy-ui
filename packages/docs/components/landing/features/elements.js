import styled from 'styled-components';

const FeaturesContainer = styled.div`
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  width: 100%;

  ${props => props.theme.media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export { FeaturesContainer };
