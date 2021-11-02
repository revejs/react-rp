import { useRef } from 'react';
import { Accessor, createMemo } from 'revejs';
import { useSignalRefresh } from './useSignalRefresh';


export const useSignalMemo = <T>(fn: () => T, deps: Accessor[], refreshOnChange = true) => {
  const value = useRef(createMemo(fn, deps)).current;
  if (refreshOnChange) useSignalRefresh([value]);
  return value;
}