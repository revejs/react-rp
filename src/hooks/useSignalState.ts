import { useEffect, useState } from 'react';
import { Accessor } from 'revejs';

export const useSignalState = <T>(dep: Accessor<T>) => {
  const [value, setValue] = useState(dep());

  useEffect(() => {
    dep.addEffect(() => setValue(dep()))
  }, []);

  return value;
}