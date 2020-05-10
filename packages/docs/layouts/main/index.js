import React from 'react';
import PropTypes from 'prop-types';
import Footer from '@templates/layout-footer';
import Navbar from '@templates/navbar';
import { LayoutContent } from './elements';

const MainLayout = ({ children }) => {
  return (
    <LayoutContent>
      <Navbar shrink />
      {children}
      <Footer />
    </LayoutContent>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
