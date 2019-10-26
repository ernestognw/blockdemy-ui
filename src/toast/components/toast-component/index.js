import React, { Component } from "react";
import PropTypes from "prop-types";
import RoundClear from "react-md-icon/dist/RoundClear";
import RoundThumbUp from "react-md-icon/dist/RoundThumbUp";
import RoundCheckCircle from "react-md-icon/dist/RoundCheckCircle";
import RoundInfo from "react-md-icon/dist/RoundInfo";
import RoundCancel from "react-md-icon/dist/RoundCancel";
import RoundWarning from "react-md-icon/dist/RoundWarning";
import Typography from "../../../typography";
import {
  Container,
  CloseContainer,
  TextContainer,
  MainIconContainer
} from "./elements";

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

class ToastComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoingToBeRemoved: false
    };
  }

  componentDidMount = () => this.startCounting();

  cancelCounting = () => clearTimeout(this.timeOut);

  startCounting = () => {
    const { options } = this.props;
    this.timeOut = setTimeout(() => {
      this.setState({ isGoingToBeRemoved: true });
    }, options.autoClose);
  };

  remove = () => {
    const { removeElements } = this.props;
    const { isGoingToBeRemoved } = this.state;
    if (isGoingToBeRemoved) {
      removeElements();
    }
  };

  forceRemove = () => {
    this.setState({ isGoingToBeRemoved: true });
    this.remove();
  };

  render() {
    const { title, message, type } = this.props;
    const { isGoingToBeRemoved } = this.state;
    return (
      <Container
        onAnimationEnd={this.remove}
        onFocus={this.cancelCounting}
        onMouseOver={this.cancelCounting}
        onMouseLeave={this.startCounting}
        type={type}
        isGoingToBeRemoved={isGoingToBeRemoved}
        onClick={this.forceRemove}
      >
        <CloseContainer onClick={this.forceRemove}>
          <RoundClear />
        </CloseContainer>
        <MainIconContainer>{getIcon(type)}</MainIconContainer>
        <TextContainer>
          <Typography variant="heading">{title}</Typography>
          {message && (
            <Typography mt="5" fontSize="12px">
              {message}
            </Typography>
          )}
        </TextContainer>
      </Container>
    );
  }
}

ToastComponent.defaultProps = {
  message: ""
};

ToastComponent.propTypes = {
  removeElements: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
};

export default ToastComponent;
