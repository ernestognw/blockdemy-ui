/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import DefaultLink from 'next/link';

const Link = ({ children, target, onClick, ...props }) => (
  <DefaultLink {...props} passHref>
    <a target={target} onClick={onClick}>
      {children}
    </a>
  </DefaultLink>
);

Link.defaultProps = {
  target: undefined,
  onClick: undefined
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func
};

export default Link;
