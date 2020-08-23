import { useMemo } from 'react';

const percentToValue = (percent, min, max) => {
  return (max - min) * percent + min;
};

const roundValueToStep = (value, step) => {
  const newValue = Math.round(value / step) * step;
  const stepDecimalPart = step.toString().split('.')[1];
  const stepPrecision = stepDecimalPart ? stepDecimalPart.length : 0;
  return Number(newValue.toFixed(stepPrecision));
};

const clampValue = (val, min, max) => {
  if (val > max) {
    return max;
  }
  if (val < min) {
    return min;
  }
  return val;
};

const setRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
};

const useForkRef = (refA, refB) => {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
};

export { percentToValue, roundValueToStep, clampValue, useForkRef };
