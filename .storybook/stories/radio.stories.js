/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import { RadioGroup, Radio } from 'blockdemy-ui/radio';
import { brandColors } from '../utils';

const Normal = () => {
  const [values, setValues] = useState(brandColors.map(() => '1'));

  return (
    <Box p={50}>
      <Box width={1}>
        {brandColors.map((color, idx) => (
          <RadioGroup
            key={color}
            label="Select one"
            message="This is a message"
            color={color.toLowerCase()}
            name="group"
            onChange={({ target: { value } }) => {
              const valuesToSet = [...values];
              valuesToSet[idx] = value;
              setValues([...valuesToSet]);
            }}
            value={values[idx]}
            my={10}
          >
            {['1', '2', '3'].map(option => (
              <Radio key={option} value={option}>
                Option {option}
              </Radio>
            ))}
          </RadioGroup>
        ))}
      </Box>
    </Box>
  );
};

const NormalInLine = () => {
  const [values, setValues] = useState(brandColors.map(() => '1'));

  return (
    <Box p={50}>
      <Box width={1}>
        {brandColors.map((color, idx) => (
          <RadioGroup
            key={color}
            inline
            label="Select one"
            message="This is a message"
            color={color.toLowerCase()}
            name="group"
            onChange={({ target: { value } }) => {
              const valuesToSet = [...values];
              valuesToSet[idx] = value;
              setValues([...valuesToSet]);
            }}
            value={values[idx]}
            my={10}
          >
            {['1', '2', '3'].map(option => (
              <Radio key={option} value={option}>
                Option {option}
              </Radio>
            ))}
          </RadioGroup>
        ))}
      </Box>
    </Box>
  );
};

const WithState = () => {
  const [values, setValues] = useState(brandColors.map(() => '1'));

  return (
    <Box p={50}>
      <Box width={1}>
        {brandColors.map((color, idx) => (
          <RadioGroup
            key={color}
            inline
            success={idx < brandColors.length / 3}
            warning={idx > brandColors.length / 3 && idx < (brandColors.length / 3) * 2}
            error={idx > (brandColors.length / 3) * 2}
            label="Select one"
            message="This is a message"
            color={color.toLowerCase()}
            name="group"
            onChange={({ target: { value } }) => {
              const valuesToSet = [...values];
              valuesToSet[idx] = value;
              setValues([...valuesToSet]);
            }}
            value={values[idx]}
            my={10}
          >
            {['1', '2', '3'].map(option => (
              <Radio key={option} value={option}>
                Option {option}
              </Radio>
            ))}
          </RadioGroup>
        ))}
      </Box>
    </Box>
  );
};

const title = 'Radio';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Normal', Normal)
  .add('Normal in line', NormalInLine)
  .add('With state', WithState);

export default {
  title
};
