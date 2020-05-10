import React from 'react';
import PropTypes from 'prop-types';
import LayoutFooter from '@templates/layout-footer';
import Navbar from '@templates/navbar';
import { Box } from 'blockdemy-ui';
import { LayoutContent } from './elements';
import Sidebar from './sidebar';

const SettingsLayout = ({ children }) => {
  return (
    <LayoutContent>
      <Navbar />
      <Sidebar />
      <Box as="main" mt="4rem" maxWidth="46rem" mx="auto" pt={8} px={5}>
        {children}
      </Box>
      <LayoutFooter my={40} />
    </LayoutContent>
  );
};

SettingsLayout.propTypes = {
  children: PropTypes.any.isRequired
};

export default SettingsLayout;
