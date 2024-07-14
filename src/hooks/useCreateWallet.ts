import {useMutation} from '@tanstack/react-query';
import walletCreate from 'api/wallet/walletCreate';

export function useCreateWallet() {
  const {mutateAsync, error, isPending} = useMutation({
    mutationKey: ['wallet-create'],
    mutationFn: walletCreate,
  });

  return {
    mutateAsync,
    error,
    isPending,
  };
}
