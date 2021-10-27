import { useMemo } from 'react';
import { Accessor, createSignal, Update } from 'revejs';
import { useSignalRefresh } from './useSignalRefresh';

export const useSignal = <T>(initValue: T, refreshOnChange = true): [Accessor<T>, Update<T>] => {
  const [value, setValue] = useMemo(() => createSignal(initValue), []);
  if (refreshOnChange) useSignalRefresh([value]);

  return [value, setValue]
}