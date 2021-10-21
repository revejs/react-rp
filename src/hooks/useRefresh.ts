import { useState } from 'react';

export const useRefresh = () => {
  const set = useState({})[1];

  return () => set({})
};