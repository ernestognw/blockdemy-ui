/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import Checkbox from 'blockdemy-ui/checkbox';
import { brandColors } from '../utils';

const Normal = () => {
  const [largeChecks, setLargeChecks] = useState(brandColors.map(() => true));
  const [checks, setChecks] = useState(brandColors.map(() => true));
  const [smallChecks, setSmallChecks] = useState(brandColors.map(() => true));

  return (
    <Box p={50}>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Checkbox
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
            color={color}
          >
            {color}
          </Checkbox>
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Checkbox
            key={color}
            my={20}
            mx={10}
            checked={checks[idx]}
            onChange={({ target: { value } }) => {
              const checksToSet = [...checks];
              checksToSet[idx] = value;
              setChecks(checksToSet);
            }}
            color={color}
          >
            {color}
          </Checkbox>
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Checkbox
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
            color={color}
          >
            {color}
          </Checkbox>
        ))}
      </Box>
    </Box>
  );
};

const WithState = () => {
  const [largeChecks, setLargeChecks] = useState(brandColors.map(() => false));
  const [checks, setChecks] = useState(brandColors.map(() => false));
  const [smallChecks, setSmallChecks] = useState(brandColors.map(() => false));

  return (
    <Box p={50}>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Checkbox
            size="large"
            key={color}
            success
            my={20}
            mx={10}
            checked={largeChecks[idx]}
            onChange={({ target: { value } }) => {
              const largeChecksToSet = [...largeChecks];
              largeChecksToSet[idx] = value;
              setLargeChecks(largeChecksToSet);
            }}
            color={color}
          >
            {color}
          </Checkbox>
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Checkbox
            key={color}
            warning
            my={20}
            mx={10}
            checked={checks[idx]}
            onChange={({ target: { value } }) => {
              const checksToSet = [...checks];
              checksToSet[idx] = value;
              setChecks(checksToSet);
            }}
            color={color}
          >
            {color}
          </Checkbox>
        ))}
      </Box>
      <Box display="flex" width={1} justifyContent="space-evenly">
        {brandColors.map((color, idx) => (
          <Checkbox
            size="small"
            key={color}
            error
            my={20}
            mx={10}
            checked={smallChecks[idx]}
            onChange={({ target: { value } }) => {
              const smallChecksToSet = [...smallChecks];
              smallChecksToSet[idx] = value;
              setSmallChecks(smallChecksToSet);
            }}
            color={color}
          >
            {color}
          </Checkbox>
        ))}
      </Box>
    </Box>
  );
};

const title = 'Checkbox';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Normal', Normal)
  .add('With State', WithState);

export default {
  title
};
