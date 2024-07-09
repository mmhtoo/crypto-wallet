import {useQuery} from '@tanstack/react-query';
import {CACHE_KEYS} from '../constants';
import verifyToken from 'api/account/verifyToken';
import {useEffect, useState} from 'react';
import {AxiosError, HttpStatusCode} from 'axios';

export function useGetProfile(enabledQuery: boolean = false) {
  const queryResult = useQuery({
    queryKey: [CACHE_KEYS.PROFILE],
    queryFn: verifyToken,
    enabled: enabledQuery,
  });
  const [shouldTokenRefresh, setShouldTokenRefresh] = useState(false);
  const {error} = queryResult;
  useEffect(() => {
    if (!error) {
      return;
    }
    console.log('Error at useGetProfile ', error);
    if (error instanceof AxiosError) {
      // eslint-disable-next-line eqeqeq
      if (error.response?.status == HttpStatusCode.Unauthorized) {
        // should refresh access token
        setShouldTokenRefresh(true);
      }
    }
  }, [error, setShouldTokenRefresh, queryResult]);

  return {
    ...queryResult,
    shouldTokenRefresh,
    onFinishedTokenRefresh: () => setShouldTokenRefresh(false),
  };
}
