import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

const Divider = forwardRef(({ orientation, ...props }, ref) => {
  const borderProps =
    orientation === 'vertical'
      ? { borderLeft: '0.0625rem solid', height: 'auto', mx: 2 }
      : { borderBottom: '0.0625rem solid', width: 'auto', my: 2 };

  return (
    <Box ref={ref} as="hr" border="0" {...borderProps} borderColor="veryLightGrey" {...props} />
  );
});

Divider.defaultProps = {
  orientation: 'horizontal'
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal'])
};

export default Divider;
