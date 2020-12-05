import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import {
  DefaultCard,
  CardHeaderContainer,
  Body,
  Footer,
  HeaderTitle,
  HeaderSubtitle
} from './elements';

const Card = forwardRef(({ children, ...props }, ref) => (
  <DefaultCard ref={ref} {...props}>
    {children}
  </DefaultCard>
));

const CardHeader = forwardRef(({ title, subtitle, ...props }, ref) => (
  <CardHeaderContainer ref={ref} {...props}>
    {title && <HeaderTitle>{title}</HeaderTitle>}
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
  </CardHeaderContainer>
));

const CardBody = forwardRef(({ children, ...props }, ref) => (
  <Body ref={ref} {...props}>
    {children}
  </Body>
));

const CardFooter = forwardRef(({ children, ...props }, ref) => (
  <Footer ref={ref} {...props}>
    {children}
  </Footer>
));

Card.propTypes = {
  children: PropTypes.any.isRequired,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color
};

CardHeader.defaultProps = {
  title: null,
  subtitle: null
};

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

CardBody.propTypes = {
  children: PropTypes.any.isRequired
};

CardFooter.propTypes = {
  children: PropTypes.any.isRequired
};

export { Card, CardFooter, CardBody, CardHeader };

Card.CardFooter = CardFooter;
Card.CardBody = CardBody;
Card.CardHeader = CardHeader;
export default Card;
