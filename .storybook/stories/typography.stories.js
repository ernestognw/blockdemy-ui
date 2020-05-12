/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Typography from 'blockdemy-ui/typography';
import Box from 'blockdemy-ui/box';
import { brandColors } from '../utils';

const Headings = () => (
  <Box display="flex" width={1} p={30} flexDirection="column">
    <Typography pb={20} variant="h1" fontStyle="italic">
      Headings
    </Typography>
    {Array.from(Array(6).keys()).map(value => (
      <Box key={value} my={20} display="flex">
        <Box display="flex" flexDirection="column" justifyContent="center" minWidth={150}>
          <Typography variant="muted" uppercase fontWeight="bold">
            Heading {value + 1}
          </Typography>
          <Typography variant="muted">h{value + 1}</Typography>
        </Box>
        <Typography variant={`h${value + 1}`}>H{value + 1}. Blockdemy Design System</Typography>
      </Box>
    ))}
  </Box>
);

const Displays = () => (
  <Box display="flex" width={1} p={30} flexDirection="column">
    <Typography pb={20} variant="h1" fontStyle="italic">
      Displays
    </Typography>
    {Array.from(Array(4).keys()).map(value => (
      <Box key={value} my={20} display="flex">
        <Box display="flex" flexDirection="column" justifyContent="center" minWidth={150}>
          <Typography variant="muted" uppercase fontWeight="bold">
            Display {value + 1}
          </Typography>
          <Typography variant="muted">d{value + 1}</Typography>
        </Box>
        <Typography variant={`d${value + 1}`}>D{value + 1}. Blockdemy Design System</Typography>
      </Box>
    ))}
  </Box>
);

const specializedValues = [
  {
    name: 'Heading',
    variant: 'heading'
  },
  {
    name: 'Heading title',
    variant: 'headingTitle'
  },
  {
    name: 'Heading section',
    variant: 'headingSection'
  }
];

const SpecializedTitles = () => (
  <Box display="flex" width={1} p={30} flexDirection="column">
    <Typography pb={20} variant="h1" fontStyle="italic">
      Specialized Titles
    </Typography>
    {specializedValues.map(({ name, variant }) => (
      <Box key={variant} my={20} display="flex">
        <Box display="flex" flexDirection="column" justifyContent="center" minWidth={150}>
          <Typography variant="muted" uppercase fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="muted">{variant}</Typography>
        </Box>
        <Typography variant={variant}>Blockdemy Design System</Typography>
      </Box>
    ))}
  </Box>
);

const Paragraphs = () => (
  <Box display="flex" width={1} p={30} flexDirection="column">
    <Typography pb={20} variant="h1" fontStyle="italic">
      Paragraphs
    </Typography>
    <Box pr={150} my={20} display="flex">
      <Box display="flex" flexDirection="column" justifyContent="center" minWidth={150}>
        <Typography variant="muted" uppercase fontWeight="bold">
          Lead Text
        </Typography>
        <Typography variant="muted">leadText</Typography>
      </Box>
      <Typography variant="leadText">
        I will be the leader of a company that ends up being worth billions of dollars, because I
        got the answers. I understand culture. I am the nucleus. I think that’s a responsibility
        that I have, to push possibilities, to show people, this is the level that things could be
        at.
      </Typography>
    </Box>
    <Box pr={150} my={20} display="flex">
      <Box display="flex" flexDirection="column" justifyContent="center" minWidth={150}>
        <Typography variant="muted" uppercase fontWeight="bold">
          Text muted
        </Typography>
        <Typography variant="muted">muted</Typography>
      </Box>
      <Typography variant="muted">
        I will be the leader of a company that ends up being worth billions of dollars, because I
        got the answers. I understand culture. I am the nucleus. I think that’s a responsibility
        that I have, to push possibilities, to show people, this is the level that things could be
        at.
      </Typography>
    </Box>
    {brandColors.map(color => (
      <Box key={color} pr={150} my={20} display="flex">
        <Box display="flex" flexDirection="column" justifyContent="center" minWidth={150}>
          <Typography variant="muted" uppercase fontWeight="bold">
            {color}
          </Typography>
          <Typography variant="muted" uppercase fontWeight="bold">
            text
          </Typography>
          <Typography variant="muted">{color}</Typography>
        </Box>
        <Typography color={color}>
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers. I understand culture. I am the nucleus. I think that’s a responsibility
          that I have, to push possibilities, to show people, this is the level that things could be
          at.
        </Typography>
      </Box>
    ))}
  </Box>
);

const title = 'Typography';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Headings', Headings)
  .add('Displays', Displays)
  .add('SpecializedTitles', SpecializedTitles)
  .add('Paragraphs', Paragraphs);

export default {
  title
};
