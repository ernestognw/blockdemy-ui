/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { MdInfo } from 'react-icons/md';
import Box from 'blockdemy-ui/box';
import Select from 'blockdemy-ui/select';
import { Card, CardBody, CardHeader } from 'blockdemy-ui/card';

const options = ['Option 1', 'Option 2', 'Option 3'];

const Simple = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');

  return (
    <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
      <Card>
        <CardHeader title="Simple selects" />
        <CardBody>
          <Select mb={30} value={value1} onChange={({ target }) => setValue1(target.value)}>
            <option value="" hidden>
              Simple
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            label="With label"
            value={value2}
            onChange={({ target }) => setValue2(target.value)}
          >
            <option value="" hidden>
              With label
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            message="With message"
            value={value3}
            onChange={({ target }) => setValue3(target.value)}
          >
            <option value="" hidden>
              With message
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            label="With label and message"
            message="With label and message"
            value={value4}
            onChange={({ target }) => setValue4(target.value)}
          >
            <option value="" hidden>
              With label and message
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            leftIcon={<MdInfo />}
            value={value5}
            onChange={({ target }) => setValue5(target.value)}
          >
            <option value="" hidden>
              With left icon
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            rightIcon={<MdInfo />}
            value={value6}
            onChange={({ target }) => setValue6(target.value)}
          >
            <option value="" hidden>
              With right icon
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            prefix="prefix"
            value={value7}
            onChange={({ target }) => setValue7(target.value)}
          >
            <option value="" hidden>
              With prefix
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            suffix="suffix"
            value={value8}
            onChange={({ target }) => setValue8(target.value)}
          >
            <option value="" hidden>
              With suffix
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </CardBody>
      </Card>
    </Box>
  );
};

const WithState = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  return (
    <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
      <Card>
        <CardHeader title="Selects with state" />
        <CardBody>
          <Select
            mb={30}
            success
            label="With success"
            message="With success"
            value={value1}
            onChange={({ target }) => setValue1(target.value)}
          >
            <option value="" hidden>
              With success
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            warning
            label="With warning"
            message="With warning"
            value={value2}
            onChange={({ target }) => setValue2(target.value)}
          >
            <option value="" hidden>
              With warning
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            my={30}
            error
            label="With error"
            message="With error"
            value={value3}
            onChange={({ target }) => setValue3(target.value)}
          >
            <option value="" hidden>
              With error
            </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </CardBody>
      </Card>
    </Box>
  );
};

const title = 'Select';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Card, CardHeader, CardBody]
    })
  )
  .add('Simple', Simple)
  .add('With State', WithState);

export default {
  title
};
