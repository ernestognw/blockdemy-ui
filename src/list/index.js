import React from "react";
import PropTypes from "prop-types";
import {
  DefaultList,
  Item,
  ItemTextContainer,
  PrimaryText,
  SecondaryText
} from "./elements";

const List = ({ children, ...props }) => (
  <DefaultList {...props}>{children}</DefaultList>
);

const ListItemText = ({ primary, secondary, ...props }) => (
  <ItemTextContainer {...props}>
    <PrimaryText>{primary}</PrimaryText>
    {secondary && <SecondaryText>{secondary}</SecondaryText>}
  </ItemTextContainer>
);

const ListItem = ({ children, clickable, ...props }) => (
  <Item clickable={clickable} {...props}>
    {children}
  </Item>
);

ListItem.defaultProps = {
  clickable: false
};

ListItem.propTypes = {
  clickable: PropTypes.bool
};

ListItemText.defaultProps = {
  secondary: ""
};

ListItemText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string
};

export { List, ListItem, ListItemText };
