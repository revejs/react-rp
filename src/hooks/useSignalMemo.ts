import { useMemo } from 'react';
import { Accessor, createMemo } from 'revejs';
import { useSignalRefresh } from './useSignalRefresh';


export const useSignalMemo = <T>(fn: () => T, deps: Accessor[], refreshOnChange = true) => {
  const value = useMemo(() => createMemo(fn, deps), []);
  if (refreshOnChange) useSignalRefresh([value]);
  return value;
}