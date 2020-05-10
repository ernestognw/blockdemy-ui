import React from 'react';
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

const Card = ({ children, ...props }) => <DefaultCard {...props}>{children}</DefaultCard>;

const CardHeader = ({ title, subtitle, ...props }) => (
  <CardHeaderContainer {...props}>
    {title && <HeaderTitle>{title}</HeaderTitle>}
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
  </CardHeaderContainer>
);

const CardBody = ({ children, ...props }) => <Body {...props}>{children}</Body>;

const CardFooter = ({ children, ...props }) => <Footer {...props}>{children}</Footer>;

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
