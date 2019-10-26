const outlined = (theme, color) => `
  border: 1px solid ${theme.colors[color]};
  color: ${theme.colors[color]};
  background-color: transparent;
  &:hover {
    background: ${theme.colors[color]};
    color: ${theme.colors.lighter};
    transition: 0.2s all;
  }
`;

const soft = (theme, color) => `
  background: ${theme.softColors[color]};
  color: ${theme.colors[color]};
  &:hover {
    box-shadow: 0 2px 1px -1px ${theme.colors[color]}33,
    0 1px 1px 0 ${theme.colors[color]}26,
    0 1px 3px 0 ${theme.colors[color]}1A;
  }
`;

const link = (theme, color) => `
  background: transparent;
  padding: 0;
  color: ${theme.colors[color]};
`;

const normal = (theme, color) => `
  background: ${theme.colors[color]};
  color: ${theme.colors.lighter};
  &:hover {
    box-shadow: 0 2px 1px -1px ${theme.colors[color]}33,
    0 1px 1px 0 ${theme.colors[color]}26,
    0 1px 3px 0 ${theme.colors[color]}1A;
  }
`;

export { outlined, soft, link, normal };
