import styled from 'styled-components';

const ExampleContainer = styled.div`
  display: flex;

  ${props => props.theme.media.tablet`
    flex-direction: column;
  `}
`;

export { ExampleContainer };
