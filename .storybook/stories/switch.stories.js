/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import Switch from 'blockdemy-ui/switch';
import { brandColors } from '../utils';

const Normal = () => {
  const [largeChecks, setLargeChecks] = useState(brandColors.map(() => true));
  const [checks, setChecks] = useState(brandColors.map(() => true));
  const [smallChecks, setSmallChecks] = useState(brandColors.map(() => true));

  return (
    <Box p={50}>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Switch
            size="large"
            key={color}
            my={20}
            mx={10}
            checked={largeChecks[idx]}
            onChange={({ target: { value } }) => {
              const largeChecksToSet = [...largeChecks];
              largeChecksToSet[idx] = value;
              setLargeChecks(largeChecksToSet);
            }}
            activeColor={color}
          />
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Switch
            key={color}
            my={20}
            mx={10}
            checked={checks[idx]}
            onChange={({ target: { value } }) => {
              const checksToSet = [...checks];
              checksToSet[idx] = value;
              setChecks(checksToSet);
            }}
            activeColor={color}
          />
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Switch
            size="small"
            key={color}
            my={20}
            mx={10}
            checked={smallChecks[idx]}
            onChange={({ target: { value } }) => {
              const smallChecksToSet = [...smallChecks];
              smallChecksToSet[idx] = value;
              setSmallChecks(smallChecksToSet);
            }}
            activeColor={color}
          />
        ))}
      </Box>
    </Box>
  );
};

const WithInactiveColor = () => {
  const [largeChecks, setLargeChecks] = useState(brandColors.map(() => false));
  const [checks, setChecks] = useState(brandColors.map(() => false));
  const [smallChecks, setSmallChecks] = useState(brandColors.map(() => false));

  return (
    <Box p={50}>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Switch
            size="large"
            key={color}
            my={20}
            mx={10}
            checked={largeChecks[idx]}
            onChange={({ target: { value } }) => {
              const largeChecksToSet = [...largeChecks];
              largeChecksToSet[idx] = value;
              setLargeChecks(largeChecksToSet);
            }}
            inactiveColor={color}
          />
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Switch
            key={color}
            my={20}
            mx={10}
            checked={checks[idx]}
            onChange={({ target: { value } }) => {
              const checksToSet = [...checks];
              checksToSet[idx] = value;
              setChecks(checksToSet);
            }}
            inactiveColor={color}
          />
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Switch
            size="small"
            key={color}
            my={20}
            mx={10}
            checked={smallChecks[idx]}
            onChange={({ target: { value } }) => {
              const smallChecksToSet = [...smallChecks];
              smallChecksToSet[idx] = value;
              setSmallChecks(smallChecksToSet);
            }}
            inactiveColor={color}
          />
        ))}
      </Box>
    </Box>
  );
};

const Disabled = () => {
  return (
    <Box p={50}>
      <Box display="flex" width={1} justifyContent="space-evenly">
        <Switch checked={false} onChange={() => {}} disabled />
      </Box>
    </Box>
  );
};

const title = 'Switch';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Normal', Normal)
  .add('With inactive color', WithInactiveColor)
  .add('Disabled', Disabled);

export default {
  title
};
