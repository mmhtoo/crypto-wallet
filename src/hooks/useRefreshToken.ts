import {useMutation} from '@tanstack/react-query';
import {refreshToken} from 'api';
import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './useReduxHooks';
import {addToken, selectToken} from 'redux/slices/user-slice/userSlice';
import {HttpStatusCode} from 'axios';

export function useRefreshToken(
  shouldRefresh: boolean,
  onFinishedRefresh: () => void,
) {
  const token = useAppSelector(selectToken);
  const {mutateAsync, error} = useMutation({
    mutationKey: ['refresh-token'],
    mutationFn: refreshToken,
  });
  const dispatch = useAppDispatch();

  const requestRefreshToken = useCallback(
    async (refresh: string) => {
      const response = await mutateAsync(refresh);
      // eslint-disable-next-line eqeqeq
      if (response.status == HttpStatusCode.Created) {
        const data = response.data;
        dispatch(
          addToken({
            accessToken: data.access,
            refreshToken: data.refresh,
          }),
        );
        onFinishedRefresh();
      }
    },
    [mutateAsync, dispatch, onFinishedRefresh],
  );

  useEffect(() => {
    if (shouldRefresh && token?.refreshToken) {
      requestRefreshToken(token.refreshToken);
    }
  }, [shouldRefresh, token, requestRefreshToken]);

  useEffect(() => {
    if (error) {
      console.log('Error at useRefreshToken ', error);
    }
  }, [error]);
}
