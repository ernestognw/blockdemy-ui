import React from "react";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import { DefaultTable, Head, Row, Cell, Body } from "./elements";

const Table = ({ children, ...props }) => (
  <DefaultTable {...props}>{children}</DefaultTable>
);

const TableHead = ({ children, ...props }) => (
  <Head {...props}>{children}</Head>
);

const TableRow = ({ children, clickable, ...props }) => (
  <Row clickable={clickable} {...props}>
    {children}
  </Row>
);

const TableCell = ({ children, wrap, ...props }) => (
  <Cell {...props}>{children}</Cell>
);

const TableBody = ({ children, ...props }) => (
  <Body {...props}>{children}</Body>
);

TableRow.defaultProps = {
  clickable: false
};

TableRow.propTypes = {
  clickable: PropTypes.bool
};

TableCell.defaultProps = {
  ...propTypes.typography,
  wrap: true,
  clickable: false
};

TableCell.propTypes = {
  ...propTypes.typography,
  wrap: PropTypes.bool,
  clickable: PropTypes.bool
};

export { Table, TableHead, TableRow, TableCell, TableBody };
