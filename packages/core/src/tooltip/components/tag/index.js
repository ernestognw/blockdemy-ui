import React, { useMemo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Text from './elements';

const Tag = ({ tag, align, width, height, left, top, position }) => {
  const tooltipRoot = useMemo(() => document.getElementById('tooltips'), []);
  const element = useMemo(() => document.createElement('div'), []);

  const [dimensions, setDimensions] = useState({ width: null, height: null });

  const ref = useRef();

  useEffect(() => {
    tooltipRoot.appendChild(element);

    return () => tooltipRoot.removeChild(element);
  }, []);

  useEffect(() => {
    const { width: oldWidth, height: oldHeight } = dimensions;
    if (ref.current) {
      const { width: elementWidth, height: elementHeight } = ref.current.getBoundingClientRect();
      if (oldWidth !== elementWidth || elementHeight !== oldHeight) {
        setDimensions({ width: elementWidth, height: elementHeight });
      }
    }
  }, [ref]);

  const setAtTop = () => {
    const { width: thisWidth, height: thisHeight } = dimensions;
    const { pageYOffset, pageXOffset } = window;

    const yValue = top + pageYOffset - thisHeight - 10;
    const xValue = left + pageXOffset - thisWidth / 2 + width / 2;

    return {
      yValue,
      xValue
    };
  };

  const setAtBottom = () => {
    const { width: thisWidth } = dimensions;
    const { pageYOffset, pageXOffset } = window;

    const yValue = top + pageYOffset + height + 10;
    const xValue = left + pageXOffset - thisWidth / 2 + width / 2;

    return {
      yValue,
      xValue
    };
  };

  const setAtLeft = () => {
    const { width: thisWidth, height: thisHeight } = dimensions;
    const { pageYOffset, pageXOffset } = window;

    const yValue = top + pageYOffset - thisHeight / 2 + height / 2;
    const xValue = left + pageXOffset - thisWidth - 10;

    return {
      yValue,
      xValue
    };
  };

  const setAtRight = () => {
    const { height: thisHeight } = dimensions;
    const { pageYOffset, pageXOffset } = window;

    const yValue = top + pageYOffset - thisHeight / 2 + height / 2;
    const xValue = left + pageXOffset + width + 10;

    return {
      yValue,
      xValue
    };
  };

  let manipulatedPosition = position;
  const { width: thisWidth, height: thisHeight } = dimensions;
  const { innerHeight, innerWidth } = window;

  let yValue;
  let xValue;

  switch (position) {
    case 'top':
      ({ yValue, xValue } = setAtTop());
      if (yValue < 0) {
        ({ yValue, xValue } = setAtBottom());
        manipulatedPosition = 'bottom';
      }
      break;
    case 'bottom':
      ({ yValue, xValue } = setAtBottom());
      if (yValue + thisHeight > innerHeight) {
        ({ yValue, xValue } = setAtTop());
        manipulatedPosition = 'top';
      }
      break;
    case 'left':
      ({ yValue, xValue } = setAtLeft());
      if (xValue < 0) {
        ({ yValue, xValue } = setAtRight());
        manipulatedPosition = 'right';
      }
      break;
    case 'right':
      ({ yValue, xValue } = setAtRight());
      if (xValue + thisWidth > innerWidth) {
        ({ yValue, xValue } = setAtLeft());
        manipulatedPosition = 'left';
      }
      break;
    default:
      ({ yValue, xValue } = setAtTop());
      break;
  }

  return createPortal(
    <Text ref={ref} x={xValue} y={yValue} align={align} position={manipulatedPosition}>
      {tag}
    </Text>,
    element
  );
};

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
