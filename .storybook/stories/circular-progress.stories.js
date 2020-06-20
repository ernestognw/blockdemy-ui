/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import Box from 'blockdemy-ui/box';
import CircularProgress, { CircularProgressLabel } from 'blockdemy-ui/circular-progress';
import { brandColors } from '../utils';

const Normal = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress size={20} value={66} key={color} my={20} mx={10} color={color} />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress value={66} key={color} my={20} mx={10} color={color} />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress size={60} value={66} key={color} my={20} mx={10} color={color} />
      ))}
    </Box>
  </Box>
);

const WithRoundCap = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress
          size={20}
          value={66}
          key={color}
          my={20}
          mx={10}
          lineCap="round"
          color={color}
        />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress lineCap="round" value={66} key={color} my={20} mx={10} color={color} />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress
          size={60}
          value={66}
          key={color}
          my={20}
          lineCap="round"
          mx={10}
          color={color}
        />
      ))}
    </Box>
  </Box>
);

const WithLabel = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress size={20} value={66} key={color} my={20} mx={10} color={color}>
          <CircularProgressLabel fontSize="0.25rem">66%</CircularProgressLabel>
        </CircularProgress>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress value={66} key={color} my={20} mx={10} color={color}>
          <CircularProgressLabel>66%</CircularProgressLabel>
        </CircularProgress>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress size={60} value={66} key={color} my={20} mx={10} color={color}>
          <CircularProgressLabel fontSize="0.65rem">66%</CircularProgressLabel>
        </CircularProgress>
      ))}
    </Box>
  </Box>
);

const WithTrackColor = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress
          size={20}
          value={66}
          key={color}
          my={20}
          mx={10}
          trackColor={`${color}Soft400`}
          color="veryLightGrey"
        />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress
          value={66}
          key={color}
          my={20}
          mx={10}
          trackColor={`${color}Soft400`}
          color="veryLightGrey"
        />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress
          size={60}
          value={66}
          key={color}
          my={20}
          mx={10}
          trackColor={`${color}Soft400`}
          color="veryLightGrey"
        />
      ))}
    </Box>
  </Box>
);

const WithStrokeWidth = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress size={20} value={66} key={color} my={20} mx={10} color={color} />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress value={66} key={color} my={20} mx={10} color={color} strokeWidth={0.2} />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress
          size={60}
          value={66}
          key={color}
          my={20}
          mx={10}
          color={color}
          strokeWidth={0.3}
        />
      ))}
    </Box>
  </Box>
);

const Indeterminate = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress size={20} indeterminate key={color} my={20} mx={10} color={color} />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress indeterminate key={color} my={20} mx={10} color={color} s />
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <CircularProgress size={60} indeterminate key={color} my={20} mx={10} color={color} />
      ))}
    </Box>
  </Box>
);

const title = 'Circular Progress';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Normal', Normal)
  .add('With Round Cap', WithRoundCap)
  .add('With Label', WithLabel)
  .add('With Track Color', WithTrackColor)
  .add('With Stroke Width', WithStrokeWidth)
  .add('Indeterminate', Indeterminate);

export default {
  title
};
