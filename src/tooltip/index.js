import React, { Children, cloneElement, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tag from './components/tag';

const Tooltip = ({ children, tag, align, position }) => {
  const [showTag, setShowTag] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const { current } = containerRef;
    if (current) {
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = current;
      if (
        width !== clientWidth ||
        height !== clientHeight ||
        left !== offsetLeft ||
        top !== offsetTop
      ) {
        setWidth(clientWidth);
        setHeight(clientHeight);
        setLeft(offsetLeft);
        setTop(offsetTop);
      }
    }
  });

  const newChildren = Children.map(children, (child, index) => (
    <div className={child.props.className} ref={containerRef}>
      {cloneElement(child, {
        index,
        onMouseOver: () => setShowTag(true),
        onFocus: () => setShowTag(true),
        onMouseLeave: () => setShowTag(false),
        ...child.props
      })}
    </div>
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
