import {useQuery} from '@tanstack/react-query';
import {CACHE_KEYS} from '../../../constants';
import {getWalletDetail} from 'api';
import {useEffect} from 'react';

export default function useGetWalletDetail() {
  const {isPending, data, error, refetch, isRefetching} = useQuery({
    queryKey: [CACHE_KEYS.WALLET_DETAIL],
    queryFn: getWalletDetail,
  });

  useEffect(() => {
    if (error) {
      console.log('Error at useGetWalletDetail ', error);
    }
  }, [error]);

  return {
    walletDetailRes: data,
    isPending,
    refetch,
    isRefetching,
  };
}
