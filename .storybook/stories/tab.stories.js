/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from '../../src/box';
import { Tabs, Tab, TabContent } from '../../src/tab';
import { Card, CardBody } from '../../src/card';

const Normal = () => {
  const [tab, setTab] = useState(1);
  return (
    <Box p={50}>
      <Card>
        <Tabs>
          <Tab onClick={() => setTab(1)} active={tab === 1}>
            Opción 1
          </Tab>
          <Tab onClick={() => setTab(2)} active={tab === 2}>
            Opción 2
          </Tab>
          <Tab onClick={() => setTab(3)} active={tab === 3}>
            Opción 3
          </Tab>
          <Tab onClick={() => setTab(4)} active={tab === 4}>
            Opción 4
          </Tab>
        </Tabs>
        <CardBody>
          {tab === 1 && <TabContent>Contenido de la opción 1</TabContent>}
          {tab === 2 && <TabContent>Contenido de la opción 2</TabContent>}
          {tab === 3 && <TabContent>Contenido de la opción 3</TabContent>}
          {tab === 4 && <TabContent>Contenido de la opción 4</TabContent>}
        </CardBody>
      </Card>
    </Box>
  );
};

const title = 'Tab';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Card]
    })
  )
  .add('Normal', Normal);

export default {
  title
};
