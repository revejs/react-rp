import { useState } from 'react';

export type Reloader = () => void

export const useReload = (): Reloader => {
  const set = useState({})[1];

  return () => set({});
};