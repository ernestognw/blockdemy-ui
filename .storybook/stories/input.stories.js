/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { MdInfo } from 'react-icons/md';
import Box from 'blockdemy-ui/box';
import Input from 'blockdemy-ui/input';
import { Card, CardBody, CardHeader } from 'blockdemy-ui/card';

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
        <CardHeader title="Simple inputs" />
        <CardBody>
          <Input
            mb={30}
            placeholder="Simple"
            value={value1}
            onChange={({ target }) => setValue1(target.value)}
          />
          <Input
            my={30}
            placeholder="With label"
            value={value2}
            onChange={({ target }) => setValue2(target.value)}
            label="With label"
          />
          <Input
            my={30}
            placeholder="With message"
            value={value3}
            onChange={({ target }) => setValue3(target.value)}
            message="With message"
          />
          <Input
            my={30}
            placeholder="With label and message"
            value={value4}
            onChange={({ target }) => setValue4(target.value)}
            label="With label and message"
            message="With label and message"
          />
          <Input
            my={30}
            placeholder="With left icon"
            value={value5}
            onChange={({ target }) => setValue5(target.value)}
            leftIcon={<MdInfo />}
          />
          <Input
            my={30}
            placeholder="With right icon"
            value={value6}
            onChange={({ target }) => setValue6(target.value)}
            rightIcon={<MdInfo />}
          />
          <Input
            my={30}
            placeholder="With prefix"
            value={value7}
            onChange={({ target }) => setValue7(target.value)}
            prefix="prefix"
          />
          <Input
            my={30}
            placeholder="With suffix"
            value={value8}
            onChange={({ target }) => setValue8(target.value)}
            suffix="suffix"
          />
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
        <CardHeader title="Inputs with state" />
        <CardBody>
          <Input
            mb={30}
            success
            label="With success"
            placeholder="With success"
            value={value1}
            onChange={({ target }) => setValue1(target.value)}
            message="With success"
          />
          <Input
            mb={30}
            warning
            label="With warning"
            placeholder="With warning"
            value={value2}
            onChange={({ target }) => setValue2(target.value)}
            message="With warning"
          />
          <Input
            mb={30}
            error
            label="With error"
            placeholder="With error"
            value={value3}
            onChange={({ target }) => setValue3(target.value)}
            message="With werror"
          />
        </CardBody>
      </Card>
    </Box>
  );
};

const title = 'Input';

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
