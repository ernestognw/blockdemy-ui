/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { MdNotifications } from 'react-icons/md';

import Typography from 'blockdemy-ui/typography';
import { Card, CardBody, CardHeader } from 'blockdemy-ui/card';
import Box from 'blockdemy-ui/box';
import Avatar from 'blockdemy-ui/avatar';
import Button from 'blockdemy-ui/button';
import Badge from 'blockdemy-ui/badge';
import { brandColors } from '../utils';

const Normal = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Badge key={color} color={color}>
          <Button color="veryLightGrey" size="small" py={20} px={10}>
            <Typography fontSize="inherit" color="default">
              {color}
            </Typography>
          </Button>
        </Badge>
      ))}
    </Box>
    <Box mt={60} display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Badge key={color} color={color}>
          <Avatar src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`} />
        </Badge>
      ))}
    </Box>
    <Box mt={60} display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Badge key={color} color={color}>
          <Box as={MdNotifications} />
        </Badge>
      ))}
    </Box>
  </Box>
);

const WithNumber = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Badge number={Math.round(Math.random() * 10)} key={color} color={color}>
          <Button color="veryLightGrey" size="small" py={20} px={10}>
            <Typography fontSize="inherit" color="default">
              {color}
            </Typography>
          </Button>
        </Badge>
      ))}
    </Box>
    <Box mt={60} display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Badge number={Math.round(Math.random() * 10)} key={color} color={color}>
          <Avatar src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`} />
        </Badge>
      ))}
    </Box>
    <Box mt={60} display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Badge number={Math.round(Math.random() * 10)} key={color} color={color}>
          <Box as={MdNotifications} />
        </Badge>
      ))}
    </Box>
  </Box>
);

const WithPosition = () => (
  <Box p={30}>
    <Card>
      <CardHeader title="Top Right" />
      <CardBody>
        <Box display="flex" width={1} justifyContent="space-evenly" alignItems="center">
          <Badge position="top-right">
            <Button color="veryLightGrey" size="small" py={20} px={10}>
              <Typography fontSize="inherit" color="default">
                Button
              </Typography>
            </Button>
          </Badge>
          <Badge position="top-right">
            <Avatar src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`} />
          </Badge>
          <Badge position="top-right">
            <Box as={MdNotifications} />
          </Badge>
        </Box>
      </CardBody>
    </Card>
    <Card mt={20}>
      <CardHeader title="Top Left" />
      <CardBody>
        <Box display="flex" width={1} justifyContent="space-evenly" alignItems="center">
          <Badge position="top-left">
            <Button color="veryLightGrey" size="small" py={20} px={10}>
              <Typography fontSize="inherit" color="default">
                Button
              </Typography>
            </Button>
          </Badge>
          <Badge position="top-left">
            <Avatar src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`} />
          </Badge>
          <Badge position="top-left">
            <Box as={MdNotifications} />
          </Badge>
        </Box>
      </CardBody>
    </Card>
    <Card mt={20}>
      <CardHeader title="Bttom Right" />
      <CardBody>
        <Box display="flex" width={1} justifyContent="space-evenly" alignItems="center">
          <Badge position="bottom-right">
            <Button color="veryLightGrey" size="small" py={20} px={10}>
              <Typography fontSize="inherit" color="default">
                Button
              </Typography>
            </Button>
          </Badge>
          <Badge position="bottom-right">
            <Avatar src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`} />
          </Badge>
          <Badge position="bottom-right">
            <Box as={MdNotifications} />
          </Badge>
        </Box>
      </CardBody>
    </Card>
    <Card mt={20}>
      <CardHeader title="Bottom Left" />
      <CardBody>
        <Box display="flex" width={1} justifyContent="space-evenly" alignItems="center">
          <Badge position="bottom-left">
            <Button color="veryLightGrey" size="small" py={20} px={10}>
              <Typography fontSize="inherit" color="default">
                Button
              </Typography>
            </Button>
          </Badge>
          <Badge position="bottom-left">
            <Avatar src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`} />
          </Badge>
          <Badge position="bottom-left">
            <Box as={MdNotifications} />
          </Badge>
        </Box>
      </CardBody>
    </Card>
  </Box>
);

const title = 'Badge';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button, Avatar, Typography]
    })
  )
  .add('Normal', Normal)
  .add('With Number', WithNumber)
  .add('With Position', WithPosition);

export default {
  title
};
