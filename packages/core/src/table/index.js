import React from 'react';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import { DefaultTable, Head, Row, Cell, Body } from './elements';

const Table = ({ children, ...props }) => <DefaultTable {...props}>{children}</DefaultTable>;

const TableHead = ({ children, ...props }) => <Head {...props}>{children}</Head>;

const TableRow = ({ children, clickable, ...props }) => (
  <Row clickable={clickable} {...props}>
    {children}
  </Row>
);

const TableCell = ({ children, wrap, ...props }) => <Cell {...props}>{children}</Cell>;

const TableBody = ({ children, ...props }) => <Body {...props}>{children}</Body>;

TableHead.propTypes = {
  children: PropTypes.any.isRequired
};

Table.propTypes = {
  children: PropTypes.any.isRequired
};

TableRow.defaultProps = {
  clickable: false
};

TableRow.propTypes = {
  children: PropTypes.any.isRequired,
  clickable: PropTypes.bool
};

TableCell.defaultProps = {
  wrap: true,
  clickable: false
};

TableCell.propTypes = {
  ...propTypes.typography,
  children: PropTypes.any.isRequired,
  wrap: PropTypes.bool,
  clickable: PropTypes.bool
};

TableBody.propTypes = {
  children: PropTypes.any.isRequired
};

export { Table, TableHead, TableRow, TableCell, TableBody };

Table.TableHead = TableHead;
Table.TableRow = TableRow;
Table.TableCell = TableCell;
Table.TableBody = TableBody;

export default Table;
