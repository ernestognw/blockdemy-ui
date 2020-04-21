import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Text from './elements';

class Tag extends Component {
  // Inside of component because if we put this out, ssr would crash,
  // due to inexistence of document at server
  tooltipRoot = document.getElementById('tooltips');

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      width: null,
      height: null
    };
  }

  componentDidMount = () => this.tooltipRoot.appendChild(this.el);

  componentWillUnmount = () => this.tooltipRoot.removeChild(this.el);

  getDimensions = ref => {
    const { width: oldWidth, height: oldHeight } = this.state;
    if (ref) {
      const { width, height } = ref.getBoundingClientRect();
      if (oldWidth !== width || height !== oldHeight) {
        this.setState({ width, height });
      }
    }
  };

  setAtTop = () => {
    const { top, left, width } = this.props;
    const { width: thisWidth, height: thisHeight } = this.state;
    const { pageYOffset } = window;

    const yValue = top + pageYOffset - thisHeight - 10;
    const xValue = left - thisWidth / 2 + width / 2;

    return {
      yValue,
      xValue
    };
  };

  setAtBottom = () => {
    const { top, left, width, height } = this.props;
    const { width: thisWidth } = this.state;
    const { pageYOffset } = window;

    const yValue = top + pageYOffset + height + 10;
    const xValue = left - thisWidth / 2 + width / 2;

    return {
      yValue,
      xValue
    };
  };

  setAtLeft = () => {
    const { top, left, height } = this.props;
    const { width: thisWidth, height: thisHeight } = this.state;
    const { pageXOffset } = window;

    const yValue = top - thisHeight / 2 + height / 2;
    const xValue = left - pageXOffset - thisWidth - 10;

    return {
      yValue,
      xValue
    };
  };

  setAtRight = () => {
    const { top, left, width, height } = this.props;
    const { height: thisHeight } = this.state;
    const { pageXOffset } = window;

    const yValue = top - thisHeight / 2 + height / 2;
    const xValue = left + pageXOffset + width + 10;

    return {
      yValue,
      xValue
    };
  };

  render() {
    const { align, tag } = this.props;
    let { position } = this.props;
    const { width: thisWidth, height: thisHeight } = this.state;
    const { innerHeight, innerWidth } = window;

    let yValue;
    let xValue;

    switch (position) {
      case 'top':
        ({ yValue, xValue } = this.setAtTop());
        if (yValue < 0) {
          ({ yValue, xValue } = this.setAtBottom());
          position = 'bottom';
        }
        break;
      case 'bottom':
        ({ yValue, xValue } = this.setAtBottom());
        if (yValue + thisHeight > innerHeight) {
          ({ yValue, xValue } = this.setAtTop());
          position = 'top';
        }
        break;
      case 'left':
        ({ yValue, xValue } = this.setAtLeft());
        if (xValue < 0) {
          ({ yValue, xValue } = this.setAtRight());
          position = 'right';
        }
        break;
      case 'right':
        ({ yValue, xValue } = this.setAtRight());
        if (xValue + thisWidth > innerWidth) {
          ({ yValue, xValue } = this.setAtLeft());
          position = 'left';
        }
        break;
      default:
        ({ yValue, xValue } = this.setAtTop());
        break;
    }

    return createPortal(
      <Text
        ref={ref => this.getDimensions(ref)}
        x={xValue}
        y={yValue}
        align={align}
        position={position}
      >
        {tag}
      </Text>,
      this.el
    );
  }
}

Tag.defaultProps = {
  align: 'left'
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  align: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired
};

export default Tag;
