import {useQuery} from '@tanstack/react-query';
import {CACHE_KEYS} from '../../../constants';
import getTransactionHistories from 'api/transaction-history/getTransactionHistories';

export default function useGetTransactionHistories() {
  return useQuery({
    queryKey: [CACHE_KEYS.TRANSACTION_HISTORIES],
    queryFn: getTransactionHistories,
  });
}
