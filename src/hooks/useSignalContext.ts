import { Context, useContext } from 'react';
import { Accessor, Update } from 'revejs';
import { useSignalRefresh } from './useSignalRefresh';

export const useSignalContext = <T>(context: Context<[Accessor<T>, Update<T>]>, refresh = true): [Accessor<T>, Update<T>] => {
  const [text, setText] = useContext(context);
  if (refresh) useSignalRefresh([text]);

  return [text, setText];
}