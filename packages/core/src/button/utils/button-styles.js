const outlined = (theme, color) => `
  border: 1px solid ${theme.colors[color]};
  color: ${theme.colors[color]};
  background-color: transparent;

  &:hover {
    background: ${theme.colors[color]};
    box-shadow: 0 6px 20px ${theme.colors.soft[color][200]};
    color: ${theme.colors.lighter};
    transition: 0.2s all;
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors.soft[color][300]};
  }

  &:active {
    box-shadow: 0 6px 10px ${theme.colors.soft[color][200]};
  }
`;

const soft = (theme, color) => `
  background: ${theme.colors.soft[color][200]};
  color: ${theme.colors[color]};

  &:hover {
    background: ${theme.colors.soft[color][300]};
    box-shadow: 0 6px 20px ${theme.colors.soft[color][200]};
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors.soft[color][300]};
  }

  &:active {
    box-shadow: 0 6px 10px ${theme.colors.soft[color][100]};
  }
`;

const link = (theme, color) => `
  background: transparent;
  color: ${theme.colors[color]};
`;

const normal = (theme, color) => `
  background: ${theme.colors[color]};
  color: ${theme.colors.lighter};
  box-shadow: 0 4px 14px 0 ${theme.colors.soft[color][200]};
  
  &:hover {
    background: ${theme.colors.soft[color][900]};
    box-shadow: 0 6px 20px ${theme.colors.soft[color][200]};
    transform: translateY(-1px);
  }
  
  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors.soft[color][500]};
  }
  
  &:active {
    box-shadow: 0 6px 10px ${theme.colors.soft[color][200]};
  }
`;

export { outlined, soft, link, normal };
