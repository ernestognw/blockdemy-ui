import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemTextContainer,
  ListPrimaryText,
  ListSecondaryText
} from "./elements";

const ListItemText = ({ primary, secondary, ...props }) => (
  <ListItemTextContainer {...props}>
    <ListPrimaryText>{primary}</ListPrimaryText>
    {secondary && <ListSecondaryText>{secondary}</ListSecondaryText>}
  </ListItemTextContainer>
);

ListItemText.defaultProps = {
  secondary: ""
};

ListItemText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string
};

export { List, ListItem, ListItemText };
