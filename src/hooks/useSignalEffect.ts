import { useEffect } from 'react';
import { Accessor, createEffect } from 'revejs';

export const useSignalEffect = (effect: () => void, deps: Accessor[]) => {
  useEffect(() => {
    const ef = createEffect(effect, deps);
    return () => ef.clear();
  }, [])
}