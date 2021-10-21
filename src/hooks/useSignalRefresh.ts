import { Accessor, createEffect } from 'revejs';
import { useEffect } from 'react';
import { useRefresh } from './useRefresh';

export const useSignalRefresh = (deps: Accessor[]) => {
  const refresh = useRefresh();

  useEffect(() => {
    createEffect(refresh, deps);
  }, [])
}