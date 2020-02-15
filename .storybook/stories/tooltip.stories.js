import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from '../../src/box';
import Tooltip from '../../src/tooltip';
import Pill from '../../src/pill';
import { brandColors } from '../utils';

const Normal = () => (
  <Box display="flex" pt={100} width={1} justifyContent="space-evenly">
    <Tooltip tag="Top tooltip">
      <Pill variant="soft" color="default" size="large" mx={10}>
        Top
      </Pill>
    </Tooltip>
    <Tooltip position="bottom" tag="Bottom tooltip">
      <Pill variant="soft" color="default" size="large" mx={10}>
        Bottom
      </Pill>
    </Tooltip>
  </Box>
);

const title = 'Tooltip';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Pill]
    })
  )
  .add('Normal', Normal);

export default {
  title
};
