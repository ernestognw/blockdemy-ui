import React from "react";
import PropTypes from "prop-types";
import { DefaultTabs, DefaultTab, DefaultTabContent } from "./elements";

const Tabs = ({ children, ...props }) => (
  <DefaultTabs {...props}>{children}</DefaultTabs>
);

const Tab = ({ children, ...props }) => (
  <DefaultTab {...props}>{children}</DefaultTab>
);

const TabContent = ({ children, ...props }) => (
  <DefaultTabContent {...props}>{children}</DefaultTabContent>
);

Tabs.defaultProps = {
  children: null
};

Tabs.propTypes = {
  children: PropTypes.any
};

Tab.defaultProps = {
  children: null,
  active: false
};

Tab.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool
};

TabContent.defaultProps = {
  children: null
};

TabContent.propTypes = {
  children: PropTypes.any
};

export { Tabs, Tab, TabContent };
