import { useState, useEffect } from 'react';
export const usePrevState = <T extends unknown>(val: T) => {
  const [prev, setPrev] = useState<T | null>(null);
  const [cur, setCur] = useState<T>(val);
  useEffect(() => {
    if (cur !== val) {
      setPrev(cur);
      setCur(val);
    }
  }, [val]);
  return prev;
};
