const outlined = (theme, color) => `
  border: 1px solid ${theme.colors[color]};
  color: ${theme.colors[color]};
  background-color: transparent;

  &:hover {
    background: ${theme.colors[color]};
    box-shadow: 0 6px 20px ${theme.colors[`${color}Soft200`]};
    color: ${theme.colors.lighter};
    transition: 0.2s all;
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[`${color}Soft300`]};
  }

  &:active {
    box-shadow: 0 6px 10px ${theme.colors[`${color}Soft200`]};
  }
`;

const soft = (theme, color) => `
  background: ${theme.colors[`${color}Soft200`]};
  color: ${theme.colors[color]};

  &:hover {
    background: ${theme.colors[`${color}Soft300`]};
    box-shadow: 0 6px 20px ${theme.colors[`${color}Soft200`]};
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[`${color}Soft300`]};
  }

  &:active {
    box-shadow: 0 6px 10px ${theme.colors[`${color}Soft100`]};
  }
`;

const link = (theme, color) => `
  background: transparent;
  color: ${theme.colors[color]};
`;

const normal = (theme, color) => `
  background: ${theme.colors[color]};
  color: ${theme.colors.lighter};
  box-shadow: 0 4px 14px 0 ${theme.colors[`${color}Soft200`]};
  
  &:hover {
    background: ${theme.colors[`${color}Soft900`]};
    box-shadow: 0 6px 20px ${theme.colors[`${color}Soft200`]};
    transform: translateY(-1px);
  }
  
  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[`${color}Soft500`]};
  }
  
  &:active {
    box-shadow: 0 6px 10px ${theme.colors[`${color}Soft200`]};
  }
`;

export { outlined, soft, link, normal };
