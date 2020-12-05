import { forwardRef } from 'react';
import setTag from './functions';

const Typography = forwardRef(
  (
    {
      color,
      variant,
      fontWeight,
      children,
      fontSize,
      className,
      underline,
      uppercase,
      capitalize,
      ...props
    },
    ref
  ) => {
    return setTag(
      color,
      variant,
      fontWeight,
      children,
      fontSize,
      className,
      underline,
      uppercase,
      capitalize,
      { ref, ...props }
    );
  }
);

export default Typography;
