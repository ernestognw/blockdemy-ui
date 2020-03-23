/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from '../../src/box';
import Typography from '../../src/typography';
import { Tabs, Tab, TabContent } from '../../src/tab';
import { Card, CardBody, CardHeader } from '../../src/card';

const Normal = () => {
  const [tabSmall, setTabSmall] = useState(1);
  const [tab, setTab] = useState(1);
  const [tabLarge, setTabLarge] = useState(1);

  return (
    <Box p={50}>
      <Card mb={20}>
        <CardHeader title="Small" />
        <Tabs size="small">
          <Tab onClick={() => setTabSmall(1)} active={tabSmall === 1}>
            Opción 1
          </Tab>
          <Tab onClick={() => setTabSmall(2)} active={tabSmall === 2}>
            Opción 2
          </Tab>
          <Tab onClick={() => setTabSmall(3)} active={tabSmall === 3}>
            Opción 3
          </Tab>
          <Tab onClick={() => setTabSmall(4)} active={tabSmall === 4}>
            Opción 4
          </Tab>
        </Tabs>
        <CardBody>
          {tabSmall === 1 && <TabContent>Contenido de la opción 1</TabContent>}
          {tabSmall === 2 && <TabContent>Contenido de la opción 2</TabContent>}
          {tabSmall === 3 && <TabContent>Contenido de la opción 3</TabContent>}
          {tabSmall === 4 && <TabContent>Contenido de la opción 4</TabContent>}
        </CardBody>
      </Card>
      <Card mb={20}>
        <CardHeader title="Normal" />
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
      <Card mb={20}>
        <CardHeader title="Large" />
        <Tabs size="large">
          <Tab onClick={() => setTabLarge(1)} active={tabLarge === 1}>
            Opción 1
          </Tab>
          <Tab onClick={() => setTabLarge(2)} active={tabLarge === 2}>
            Opción 2
          </Tab>
          <Tab onClick={() => setTabLarge(3)} active={tabLarge === 3}>
            Opción 3
          </Tab>
          <Tab onClick={() => setTabLarge(4)} active={tabLarge === 4}>
            Opción 4
          </Tab>
        </Tabs>
        <CardBody>
          {tabLarge === 1 && <TabContent>Contenido de la opción 1</TabContent>}
          {tabLarge === 2 && <TabContent>Contenido de la opción 2</TabContent>}
          {tabLarge === 3 && <TabContent>Contenido de la opción 3</TabContent>}
          {tabLarge === 4 && <TabContent>Contenido de la opción 4</TabContent>}
        </CardBody>
      </Card>
    </Box>
  );
};

const title = 'Tab';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Card, Typography]
    })
  )
  .add('Normal', Normal);

export default {
  title
};
