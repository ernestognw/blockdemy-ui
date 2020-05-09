/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import Button from 'blockdemy-ui/button';
import SideModal from 'blockdemy-ui/side-modal';
import Typography from 'blockdemy-ui/typography';

const Simple = () => {
  const [active, toggleSideModal] = useState(false);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column" alignItems="center">
      <Button my={10} color="primary" onClick={() => toggleSideModal(!active)}>
        Open simple side modal
      </Button>
      <SideModal active={active} closeButton={() => toggleSideModal(!active)}>
        <Typography>Body of a simple side modal</Typography>
      </SideModal>
    </Box>
  );
};

const WithTitle = () => {
  const [active, toggleSideModal] = useState(false);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column" alignItems="center">
      <Button my={10} color="primary" onClick={() => toggleSideModal(!active)}>
        Open side modal with title
      </Button>
      <SideModal
        title="Title of a side modal"
        active={active}
        closeButton={() => toggleSideModal(!active)}
      >
        <Typography>Body of a side modal with title</Typography>
      </SideModal>
    </Box>
  );
};

const title = 'Side Modal';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button, Typography]
    })
  )
  .add('Simple', Simple)
  .add('With Title', WithTitle);

export default {
  title
};
