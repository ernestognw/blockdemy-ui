import React, { Children, cloneElement, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tag from './components/tag';
import Box from '../box';

const Tooltip = ({ children, tag, align, position, ...props }) => {
  const [showTag, setShowTag] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const { current } = containerRef;
    if (current) {
      const {
        width: currentWidth,
        height: currentHeight,
        left: currentLeft,
        top: currentTop
        // Thake first child as ref
      } = current.children[0].getBoundingClientRect();
      if (
        width !== currentWidth ||
        height !== currentHeight ||
        left !== currentLeft ||
        top !== currentTop
      ) {
        setWidth(currentWidth);
        setHeight(currentHeight);
        setLeft(currentLeft);
        setTop(currentTop);
      }
    }
  });

  const newChildren = Children.map(children, (child, index) => (
    <Box className={child.props.className} {...props} ref={containerRef}>
      {cloneElement(child, {
        index,
        onMouseOver: () => setShowTag(true),
        onFocus: () => setShowTag(true),
        onMouseLeave: () => setShowTag(false),
        ...child.props
      })}
    </Box>
  ));

  return (
    <>
      {showTag && (
        <Tag
          align={align}
          left={left}
          top={top}
          height={height}
          width={width}
          tag={tag}
          position={position}
        />
      )}
      {newChildren}
    </>
  );
};

Tooltip.defaultProps = {
  align: 'left',
  position: 'top'
};

Tooltip.propTypes = {
  children: PropTypes.any.isRequired,
  tag: PropTypes.any.isRequired,
  align: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

export default Tooltip;
