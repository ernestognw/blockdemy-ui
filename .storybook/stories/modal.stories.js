/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import Button from 'blockdemy-ui/button';
import Modal from 'blockdemy-ui/modal';
import Typography from 'blockdemy-ui/typography';

const Simple = () => {
  const [activeSmall, toggleSmallModal] = useState(false);
  const [active, toggleModal] = useState(false);
  const [activeLarge, toggleLargeModal] = useState(false);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column" alignItems="center">
      <Button my={10} color="primary" onClick={() => toggleSmallModal(!activeSmall)}>
        Open simple small modal
      </Button>
      <Button my={10} color="primary" onClick={() => toggleModal(!active)}>
        Open simple normal modal
      </Button>
      <Button my={10} color="primary" onClick={() => toggleLargeModal(!activeLarge)}>
        Open simple large modal
      </Button>
      <Modal size="small" active={activeSmall} closeButton={() => toggleSmallModal(!activeSmall)}>
        <Typography>Body of a simple small modal</Typography>
      </Modal>
      <Modal active={active} closeButton={() => toggleModal(!active)}>
        <Typography>Body of a simple normal modal</Typography>
      </Modal>
      <Modal size="large" active={activeLarge} closeButton={() => toggleLargeModal(!activeLarge)}>
        <Typography>Body of a simple large modal</Typography>
      </Modal>
    </Box>
  );
};

const WithTitle = () => {
  const [activeSmall, toggleSmallModal] = useState(false);
  const [active, toggleModal] = useState(false);
  const [activeLarge, toggleLargeModal] = useState(false);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column" alignItems="center">
      <Button my={10} color="primary" onClick={() => toggleSmallModal(!activeSmall)}>
        Open small modal with title
      </Button>
      <Button my={10} color="primary" onClick={() => toggleModal(!active)}>
        Open normal modal with title
      </Button>
      <Button my={10} color="primary" onClick={() => toggleLargeModal(!activeLarge)}>
        Open large modal with title
      </Button>
      <Modal
        size="small"
        title="Title of a small modal with title"
        active={activeSmall}
        closeButton={() => toggleSmallModal(!activeSmall)}
      >
        <Typography>Body of a small modal with title</Typography>
      </Modal>
      <Modal
        title="Title of a normal modal"
        active={active}
        closeButton={() => toggleModal(!active)}
      >
        <Typography>Body of a normal modal with title</Typography>
      </Modal>
      <Modal
        size="large"
        title="Title of a large modal"
        active={activeLarge}
        closeButton={() => toggleLargeModal(!activeLarge)}
      >
        <Typography>Body of a large modal with title</Typography>
      </Modal>
    </Box>
  );
};

const WithFooter = () => {
  const [activeSmall, toggleSmallModal] = useState(false);
  const [active, toggleModal] = useState(false);
  const [activeLarge, toggleLargeModal] = useState(false);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column" alignItems="center">
      <Button my={10} color="primary" onClick={() => toggleSmallModal(!activeSmall)}>
        Open small modal with footer
      </Button>
      <Button my={10} color="primary" onClick={() => toggleModal(!active)}>
        Open normal modal with footer
      </Button>
      <Button my={10} color="primary" onClick={() => toggleLargeModal(!activeLarge)}>
        Open large modal with footer
      </Button>
      <Modal
        size="small"
        primaryAction={() => toggleSmallModal(!activeSmall)}
        secondaryAction={() => toggleSmallModal(!activeSmall)}
        secondaryVariant="outlined"
        active={activeSmall}
        closeButton={() => toggleSmallModal(!activeSmall)}
      >
        <Typography>Body of a small modal with footer</Typography>
      </Modal>
      <Modal
        primaryAction={() => toggleModal(!active)}
        secondaryAction={() => toggleModal(!active)}
        secondaryVariant="outlined"
        active={active}
        closeButton={() => toggleModal(!active)}
      >
        <Typography>Body of a normal modal with footer</Typography>
      </Modal>
      <Modal
        size="large"
        primaryAction={() => toggleLargeModal(!activeLarge)}
        secondaryAction={() => toggleLargeModal(!activeLarge)}
        secondaryVariant="outlined"
        active={activeLarge}
        closeButton={() => toggleLargeModal(!activeLarge)}
      >
        <Typography>Body of a large modal with footer</Typography>
      </Modal>
    </Box>
  );
};

const Complete = () => {
  const [activeSmall, toggleSmallModal] = useState(false);
  const [active, toggleModal] = useState(false);
  const [activeLarge, toggleLargeModal] = useState(false);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column" alignItems="center">
      <Button my={10} color="primary" onClick={() => toggleSmallModal(!activeSmall)}>
        Open complete small modal
      </Button>
      <Button my={10} color="primary" onClick={() => toggleModal(!active)}>
        Open complete normal modal
      </Button>
      <Button my={10} color="primary" onClick={() => toggleLargeModal(!activeLarge)}>
        Open complete large modal
      </Button>
      <Modal
        size="small"
        title="Complete small modal"
        primaryAction={() => toggleSmallModal(!activeSmall)}
        secondaryAction={() => toggleLargeModal(!activeLarge)}
        secondaryVariant="outlined"
        active={activeSmall}
        closeButton={() => toggleSmallModal(!activeSmall)}
      >
        <Typography>Body of a small modal with footer</Typography>
      </Modal>
      <Modal
        title="Complete normal modal"
        primaryAction={() => toggleModal(!active)}
        secondaryAction={() => toggleLargeModal(!activeLarge)}
        secondaryVariant="outlined"
        active={active}
        closeButton={() => toggleModal(!active)}
      >
        <Typography>Body of a normal modal with footer</Typography>
      </Modal>
      <Modal
        size="large"
        title="Complete large modal"
        primaryAction={() => toggleLargeModal(!activeLarge)}
        secondaryAction={() => toggleLargeModal(!activeLarge)}
        secondaryVariant="outlined"
        active={activeLarge}
        closeButton={() => toggleLargeModal(!activeLarge)}
      >
        <Typography>Body of a large modal with footer</Typography>
      </Modal>
    </Box>
  );
};

const title = 'Modal';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button, Typography]
    })
  )
  .add('Simple', Simple)
  .add('With Title', WithTitle)
  .add('With Footer', WithFooter)
  .add('Complete', Complete);

export default {
  title
};
