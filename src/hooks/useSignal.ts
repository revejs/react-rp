import { useRef } from 'react';
import { Accessor, createSignal, Update } from 'revejs';
import { useSignalRefresh } from './useSignalRefresh';

export const useSignal = <T>(initValue: T, refreshOnChange = true): [Accessor<T>, Update<T>] => {
  const [value, setValue] = useRef(createSignal(initValue)).current;
  if (refreshOnChange) useSignalRefresh([value]);

  return [value, setValue]
}