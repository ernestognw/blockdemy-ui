import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.colors.lighter};
`;

const Delimiter = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Delimiter };
