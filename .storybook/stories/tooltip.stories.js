/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import Tooltip from 'blockdemy-ui/tooltip';
import Pill from 'blockdemy-ui/pill';

const Normal = () => (
  <Box display="flex" pt={200} width={1} justifyContent="space-evenly">
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
    <Tooltip position="left" tag="Left tooltip">
      <Pill variant="soft" color="default" size="large" mx={10}>
        Left
      </Pill>
    </Tooltip>
    <Tooltip position="right" tag="Right tooltip">
      <Pill variant="soft" color="default" size="large" mx={10}>
        Right
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
