import React from 'react';
import { Container, Delimiter } from '@components/landing/elements';
import Header from '@components/landing/header';
import Features from '@components/landing/features';
import CodeExample from '@components/landing/code-example';

const Index = () => {
  return (
    <Container>
      <Delimiter>
        <Header />
        <Features />
        <CodeExample />
      </Delimiter>
    </Container>
  );
};

export default Index;
