import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from '../../src/box';
import Button from '../../src/button';
import { brandColors } from '../utils';
import { toast } from '../config';

const message = color => `Example of a ${color} toast`;

const getToast = color => {
  switch (color) {
    case 'primary':
      return toast.primary(color, message(color));
    case 'secondary':
      return toast.secondary(color, message(color));
    case 'info':
      return toast.info(color, message(color));
    case 'default':
      return toast.default(color, message(color));
    case 'success':
      return toast.success(color, message(color));
    case 'warning':
      return toast.warning(color, message(color));
    case 'danger':
      return toast.danger(color, message(color));
    default:
      return toast.primary(color, message(color));
  }
};

const Normal = () => {
  return (
    <Box p={50} pt={200} display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button
          size="large"
          key={color}
          onClick={() => getToast(color.toLowerCase())}
          my={20}
          mx={10}
          color={color.toLowerCase()}
        >
          see {color}
        </Button>
      ))}
    </Box>
  );
};

const title = 'Toast';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button]
    })
  )
  .add('Normal', Normal);

export default {
  title
};
