/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import RoundMenu from 'react-md-icon/dist/RoundMenu';

import Box from '../../src/box';
import Navbar from '../../src/navbar';
import Select from '../../src/select';
import Button from '../../src/button';
import LogoWhite from '../images/brand/blockdemy-plain-white.svg';
import LogoDark from '../images/brand/blockdemy-plain-dark.svg';
import { brandColors, grayscaleColors } from '../utils';

const colors = [...brandColors.map(color => color.toLowerCase()), ...grayscaleColors];

const Shrinked = () => {
  const [color, setColor] = useState('');
  return (
    <Box>
      <Navbar color={color}>
        <Box
          width="100"
          as="img"
          src={color.includes('light') || color.includes('Light') || !color ? LogoDark : LogoWhite}
        />
        <Button
          size="small"
          color={
            color.includes('light') || color.includes('Light') || !color ? 'default' : 'lighter'
          }
          variant="outlined"
        >
          <RoundMenu />
        </Button>
      </Navbar>
      <Box display="flex" width={1} p={40} pt={100} alignItems="center" flexDirection="column">
        <Select value={color} onChange={({ target }) => setColor(target.value)}>
          <option value="" hidden>
            Select navbar color
          </option>
          {colors.map(colorMapped => (
            <option key={colorMapped} value={colorMapped}>
              {colorMapped}
            </option>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

const FullWidth = () => {
  const [color, setColor] = useState('');
  return (
    <Box>
      <Navbar shrink={false} color={color}>
        <Box
          width="100"
          as="img"
          src={color.includes('light') || color.includes('Light') || !color ? LogoDark : LogoWhite}
        />
        <Button
          size="small"
          color={
            color.includes('light') || color.includes('Light') || !color ? 'default' : 'lighter'
          }
          variant="outlined"
        >
          <RoundMenu />
        </Button>
      </Navbar>
      <Box display="flex" width={1} p={40} pt={100} alignItems="center" flexDirection="column">
        <Select value={color} onChange={({ target }) => setColor(target.value)}>
          <option value="" hidden>
            Select navbar color
          </option>
          {colors.map(colorMapped => (
            <option key={colorMapped} value={colorMapped}>
              {colorMapped}
            </option>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

const title = 'Navbar';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Select, Button, RoundMenu]
    })
  )
  .add('Shrinked', Shrinked)
  .add('Full Width', FullWidth);

export default {
  title
};
