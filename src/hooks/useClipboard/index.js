import { useState, useEffect, useCallback } from 'react';
import copy from 'copy-to-clipboard';

const useClipboard = value => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    const didCopy = copy(value);
    setHasCopied(didCopy);
  }, [value]);

  useEffect(() => {
    if (hasCopied) {
      const id = setTimeout(() => {
        setHasCopied(false);
      }, 1500);

      return () => clearTimeout(id);
    }

    return () => {};
  }, [hasCopied]);

  return { value, onCopy, hasCopied };
};

export { useClipboard };
