import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import Box from '../box';
import AnimateCollapse from './elements';

const Collapse = forwardRef(
  (
    {
      isOpen,
      animateOpacity,
      onAnimationStart,
      onAnimationEnd,
      duration,
      startingHeight,
      endingHeight,
      ...props
    },
    ref
  ) => {
    return (
      <AnimateCollapse
        duration={duration}
        easing="ease"
        animateOpacity={animateOpacity}
        height={isOpen ? endingHeight : startingHeight}
        applyInlineTransitions={false}
        onAnimationEnd={onAnimationEnd}
        onAnimationStart={onAnimationStart}
      >
        <Box ref={ref} {...props} />
      </AnimateCollapse>
    );
  }
);

Collapse.defaultProps = {
  animateOpacity: true,
  duration: 250,
  startingHeight: 0,
  endingHeight: 'auto',
  onAnimationEnd: () => {},
  onAnimationStart: () => {}
};

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  animateOpacity: PropTypes.bool,
  duration: PropTypes.number,
  startingHeight: PropTypes.number,
  endingHeight: PropTypes.number,
  onAnimationEnd: PropTypes.func,
  onAnimationStart: PropTypes.func,
  ...propTypes.space
};

export default Collapse;
