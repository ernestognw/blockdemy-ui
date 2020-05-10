import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { DefaultTabs, DefaultTab, DefaultTabContent } from './elements';

const Tabs = ({ children, size, ...props }) => {
  const clones = Children.map(children, child => {
    if (!isValidElement(child)) return <></>;
    return cloneElement(child, {
      ...child.props,
      size
    });
  });

  return <DefaultTabs {...props}>{clones}</DefaultTabs>;
};

const Tab = ({ children, ...props }) => <DefaultTab {...props}>{children}</DefaultTab>;

const TabContent = ({ children, ...props }) => (
  <DefaultTabContent {...props}>{children}</DefaultTabContent>
);

Tabs.defaultProps = {
  children: null,
  size: 'normal'
};

Tabs.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  ...propTypes.typography
};

Tab.defaultProps = {
  children: null,
  active: false,
  color: 'primary',
  size: 'normal'
};

Tab.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large'])
};

TabContent.defaultProps = {
  children: null
};

TabContent.propTypes = {
  children: PropTypes.any
};

export { Tabs, Tab, TabContent };

Tab.Tabs = Tabs;
Tab.TabContent = TabContent;
export default Tab;
