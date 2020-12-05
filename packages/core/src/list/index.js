import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { DefaultList, Item, ItemTextContainer, PrimaryText, SecondaryText } from './elements';

const List = forwardRef(({ children, ...props }, ref) => (
  <DefaultList ref={ref} {...props}>
    {children}
  </DefaultList>
));

const ListItemText = forwardRef(({ primary, secondary, ...props }, ref) => (
  <ItemTextContainer ref={ref} {...props}>
    <PrimaryText>{primary}</PrimaryText>
    {secondary && <SecondaryText>{secondary}</SecondaryText>}
  </ItemTextContainer>
));

const ListItem = forwardRef(({ children, clickable, ...props }, ref) => (
  <Item ref={ref} clickable={clickable} {...props}>
    {children}
  </Item>
));

List.propTypes = {
  children: PropTypes.any.isRequired
};

ListItem.defaultProps = {
  clickable: false
};

ListItem.propTypes = {
  children: PropTypes.any.isRequired,
  clickable: PropTypes.bool
};

ListItemText.defaultProps = {
  secondary: ''
};

ListItemText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string
};

export { List, ListItem, ListItemText };

List.ListItem = ListItem;
List.ListItemText = ListItemText;
export default List;
