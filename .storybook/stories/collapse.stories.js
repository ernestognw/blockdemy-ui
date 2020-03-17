/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from '../../src/box';
import Button from '../../src/button';
import Collapse from '../../src/collapse';

const Normal = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column">
      <Button my={10} color="primary" onClick={handleToggle}>
        Toggle
      </Button>
      <Collapse isOpen={show}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere faucibus quam eget
        accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Proin iaculis magna et eros tempus facilisis. Praesent vitae lacus magna. Duis non
        ipsum non augue feugiat vulputate in ut nibh. Fusce hendrerit posuere lectus eu mattis.
        Donec ac quam eu ex pretium tempor non at nisl. Quisque faucibus velit odio, ut auctor eros
        vulputate vestibulum. Suspendisse velit nisi, suscipit facilisis ornare vel, finibus id
        orci. Mauris ullamcorper mollis tempus. Nullam eros mauris, lacinia id mi in, dapibus
        condimentum velit. In hac habitasse platea dictumst. Mauris quis euismod orci. Suspendisse
        congue tincidunt nisi, ac dignissim urna ornare non. Proin pharetra sem id nulla mollis,
        quis iaculis erat pretium. Suspendisse tristique pharetra magna, laoreet vehicula diam. Ut
        rutrum elit vel elit tempor pellentesque. Maecenas varius efficitur justo eget consectetur.
        Pellentesque quis metus et enim rutrum rutrum vitae vitae elit. Nam pulvinar dui id
        convallis rhoncus. Etiam mollis augue a elit euismod, non mattis est aliquam. Mauris
        condimentum mi non libero convallis, in viverra enim elementum. Nam vestibulum laoreet
        massa, ut sodales erat facilisis vitae.
      </Collapse>
    </Box>
  );
};

const Height = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box p={30} display="flex" width={1} flexDirection="column">
      <Collapse startingHeight={20} isOpen={show}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere faucibus quam eget
        accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </Collapse>
      <Button my={10} color="primary" onClick={handleToggle}>
        Show more
      </Button>
    </Box>
  );
};

const title = 'Collapse';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button]
    })
  )
  .add('Normal', Normal)
  .add('Height', Height);

export default {
  title
};
