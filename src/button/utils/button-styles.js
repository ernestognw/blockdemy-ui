const outlined = (theme, color) => `
  border: 1px solid ${theme.colors[color]};
  color: ${theme.colors[color]};
  background-color: transparent;

  &:hover {
    background: ${theme.colors[color]};
    box-shadow: 0 6px 20px ${theme.colors[color]}33;
    color: ${theme.colors.lighter};
    transition: 0.2s all;
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[color]}40;
  }

  &:active {
    box-shadow: 0 6px 10px ${theme.colors[color]}33;
  }
`;

const soft = (theme, color) => `
  background: ${theme.softColors[color]};
  color: ${theme.colors[color]};

  &:hover {
    background: ${theme.colors[color]}30;
    box-shadow: 0 6px 20px ${theme.colors[color]}33;
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[color]}40;
  }

  &:active {
    box-shadow: 0 6px 10px ${theme.colors[color]}13;
  }
`;

const link = (theme, color) => `
  background: transparent;
  color: ${theme.colors[color]};
`;

const normal = (theme, color) => `
  background: ${theme.colors[color]};
  color: ${theme.colors.lighter};
  box-shadow: 0 4px 14px 0 ${theme.colors[color]}33;
  
  &:hover {
    background: ${theme.colors[color]}E6;
    box-shadow: 0 6px 20px ${theme.colors[color]}33;
    transform: translateY(-1px);
  }
  
  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[color]}80;
  }
  
  &:active {
    box-shadow: 0 6px 10px ${theme.colors[color]}33;
  }
`;

export { outlined, soft, link, normal };
