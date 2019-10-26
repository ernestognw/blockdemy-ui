import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Text from "./elements";

class Tag extends Component {
  // Inside of component because if we put this out, ssr would crash,
  // due to inexistence of document at server
  tooltipRoot = document.getElementById("tooltips");

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.state = {
      width: null,
      height: null
    };
  }

  componentDidMount = () => {
    this.tooltipRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    this.tooltipRoot.removeChild(this.el);
  };

  getWidth = ref => {
    const { width: oldWidth, height: oldHeight } = this.state;
    if (ref) {
      const { width, height } = ref.getBoundingClientRect();
      if (oldWidth !== width || oldHeight !== height) {
        this.setState({ width, height });
      }
    }
  };

  render() {
    const { tag, x, y, width, showTag, align } = this.props;
    const { width: thisWidth, height: thisHeight } = this.state;
    return ReactDOM.createPortal(
      <Text
        showTag={showTag}
        ref={ref => this.getWidth(ref)}
        x={x - thisWidth / 2 + width / 2}
        y={y - thisHeight - 10 + window.pageYOffset}
        align={align}
      >
        {tag}
      </Text>,
      this.el
    );
  }
}

Tag.defaultProps = {
  showTag: false,
  align: "left"
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  align: PropTypes.string,
  showTag: PropTypes.bool,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Tag;
