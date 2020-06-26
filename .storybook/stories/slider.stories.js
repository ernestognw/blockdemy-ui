/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Slider, { Track, FilledTrack, Thumb } from 'blockdemy-ui/slider';
import Button from 'blockdemy-ui/button';
import Typography from 'blockdemy-ui/typography';
import Box from 'blockdemy-ui/box';
import { brandColors } from '../utils';

const Normal = () => {
  const [values, setValues] = useState(brandColors.map(() => 30));

  return (
    <Box display="flex" width={1} px={40} alignItems="center" flexDirection="column">
      {brandColors.map((color, idx) => (
        <Slider
          onChange={value => {
            const valuesToSet = [...values];
            valuesToSet[idx] = value;
            setValues(valuesToSet);
          }}
          value={values[idx]}
          py={30}
          color={color}
          key={color}
          defaultValue={30}
        >
          <Track />
          <FilledTrack />
          <Thumb />
        </Slider>
      ))}
    </Box>
  );
};

const WithSizes = () => {
  const [smallValues, setSmallValues] = useState(brandColors.map(() => 30));
  const [normalValues, setNormalValues] = useState(brandColors.map(() => 30));
  const [largeValues, setLargeValues] = useState(brandColors.map(() => 30));

  return (
    <>
      <Typography variant="headingTitle" pl={40} mt={10}>
        Small
      </Typography>
      <Box display="flex" width={1} px={40} alignItems="center" flexDirection="column">
        {brandColors.map((color, idx) => (
          <Slider
            size="small"
            onChange={value => {
              const smallValuesToSet = [...smallValues];
              smallValuesToSet[idx] = value;
              setSmallValues(smallValuesToSet);
            }}
            value={smallValues[idx]}
            py={30}
            color={color}
            key={color}
            defaultValue={30}
          >
            <Track />
            <FilledTrack />
            <Thumb />
          </Slider>
        ))}
      </Box>
      <Typography variant="headingTitle" pl={40} mt={10}>
        Normal
      </Typography>
      <Box display="flex" width={1} px={40} alignItems="center" flexDirection="column">
        {brandColors.map((color, idx) => (
          <Slider
            onChange={value => {
              const normalValuesToSet = [...normalValues];
              normalValuesToSet[idx] = value;
              setNormalValues(normalValuesToSet);
            }}
            value={normalValues[idx]}
            py={30}
            color={color}
            key={color}
            defaultValue={30}
          >
            <Track />
            <FilledTrack />
            <Thumb />
          </Slider>
        ))}
      </Box>
      <Typography variant="headingTitle" pl={40} mt={10}>
        Large
      </Typography>
      <Box display="flex" width={1} px={40} alignItems="center" flexDirection="column">
        {brandColors.map((color, idx) => (
          <Slider
            size="large"
            onChange={value => {
              const largeValuesToSet = [...largeValues];
              largeValuesToSet[idx] = value;
              setLargeValues(largeValuesToSet);
            }}
            value={largeValues[idx]}
            py={30}
            color={color}
            key={color}
            defaultValue={30}
          >
            <Track />
            <FilledTrack />
            <Thumb />
          </Slider>
        ))}
      </Box>
    </>
  );
};

const WithInnerThumb = () => {
  const [values, setValues] = useState(brandColors.map(() => 30));

  return (
    <Box display="flex" width={1} px={40} alignItems="center" flexDirection="column">
      {brandColors.map((color, idx) => (
        <Slider
          onChange={value => {
            const valuesToSet = [...values];
            valuesToSet[idx] = value;
            setValues(valuesToSet);
          }}
          value={values[idx]}
          py={30}
          color={color}
          key={color}
          defaultValue={30}
        >
          <Track />
          <FilledTrack />
          <Thumb size={25}>
            <Typography fontSize="0.8rem">{values[idx]}</Typography>
          </Thumb>
        </Slider>
      ))}
    </Box>
  );
};

const title = 'Slider';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button]
    })
  )
  .add('Normal', Normal)
  .add('With sizes', WithSizes)
  .add('With inner thumb', WithInnerThumb);

export default {
  title
};
