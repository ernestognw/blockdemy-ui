import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

let portalContainer;

const rendered = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

class Portal extends Component {
  constructor() {
    super();

    if (!rendered) return;

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      document.body.append(portalContainer);
    }

    this.el = document.createElement('div');
    portalContainer.append(this.el);
  }

  componentWillUnmount = () => {
    portalContainer.removeChild(this.el);
  };

  render() {
    if (!rendered) return null;
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Portal;
