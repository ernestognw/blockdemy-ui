import { outlined, soft, link, normal } from './pill-styles';

const getStyle = ({ variant, theme, color }) => {
  switch (variant) {
    case 'outlined':
      return outlined(theme, color);
    case 'soft':
      return soft(theme, color);
    case 'link':
      return link(theme, color);
    default:
      return normal(theme, color);
  }
};

const getPadding = size => {
  switch (size) {
    case 'small':
      return '2px 5px';
    case 'large':
      return '4px 12px';
    default:
      return '3px 8px';
  }
};

const getFontSize = size => {
  switch (size) {
    case 'small':
      return '0.5rem';
    case 'large':
      return '0.8rem';
    default:
      return '0.7rem';
  }
};

const getBorderRadius = size => {
  switch (size) {
    case 'small':
      return '2px';
    case 'large':
      return '3px';
    default:
      return '3px';
  }
};

export { getStyle, getPadding, getFontSize, getBorderRadius };
