import setTag from "./functions";

const Typography = ({
  color,
  variant,
  fontWeight,
  children,
  align,
  fontSize,
  className,
  underline,
  uppercase,
  ...props
}) => {
  return setTag(
    color,
    variant,
    fontWeight,
    children,
    align,
    fontSize,
    className,
    underline,
    uppercase,
    { ...props }
  );
};

export default Typography;
