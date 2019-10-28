import React from "react";
import PropTypes from "prop-types";
import Typography from "../typography";
import RoundThumbUp from "react-md-icon/dist/RoundThumbUp";
import RoundCheckCircle from "react-md-icon/dist/RoundCheckCircle";
import RoundInfo from "react-md-icon/dist/RoundInfo";
import RoundCancel from "react-md-icon/dist/RoundCancel";
import RoundWarning from "react-md-icon/dist/RoundWarning";
import { Container, Body, IconContainer, Text } from "./elements";
import propTypes from "@styled-system/prop-types";

const getIcon = type => {
  switch (type) {
    case "primary":
      return <RoundThumbUp />;
    case "success":
      return <RoundCheckCircle />;
    case "info":
      return <RoundInfo />;
    case "secondary":
      return <RoundWarning />;
    case "warning":
      return <RoundWarning />;
    case "danger":
      return <RoundCancel />;
    default:
      return <RoundThumbUp />;
  }
};

const Alert = ({ type, children, primary, secondary, ...props }) => (
  <Container type={type} {...props}>
    <Body type={type}>
      <IconContainer>{getIcon(type)}</IconContainer>
      <Text>
        <Typography fontWeight="bold" mb="5" variant="muted">
          {primary}
        </Typography>
        {secondary && (
          <Typography fontSize="12px" variant="muted">
            {secondary}
          </Typography>
        )}
        {children}
      </Text>
    </Body>
  </Container>
);

Alert.defaultProps = {
  type: "primary",
  secondary: "",
  children: null
};

Alert.propTypes = {
  children: PropTypes.any,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  type: PropTypes.string,
  ...propTypes.color,
  ...propTypes.space
};

export default Alert;
