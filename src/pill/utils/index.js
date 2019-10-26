import { outlined, soft, link, normal } from "./pill-styles";

const getStyle = ({ variant, theme, color }) => {
  switch (variant) {
    case "outlined":
      return outlined(theme, color);
    case "soft":
      return soft(theme, color);
    case "link":
      return link(theme, color);
    default:
      return normal(theme, color);
  }
};

export default getStyle;
