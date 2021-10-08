import { useEffect } from 'react';
import { createReceiver, Parcel } from 'revejs';
import { useReload } from './useReload';

interface UseDeliveryReload {
  (fn: () => void): void,
  (deps: Parcel[]): void
}

export const useDeliveryReload: UseDeliveryReload = (arg) => {
  const reload = useReload();
  useEffect(() => {
    const fn = arg instanceof Array
      ? () => arg.map(parcel => parcel())
      : arg

    createReceiver(() => {
      fn();
      reload();
    });
  }, []);
};