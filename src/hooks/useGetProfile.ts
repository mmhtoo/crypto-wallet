import {useQuery} from '@tanstack/react-query';
import {CACHE_KEYS} from '../constants';
import verifyToken from 'api/account/verifyToken';
import {useEffect} from 'react';
import {AxiosError, HttpStatusCode} from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {
  PublicStackScreenList,
  PublicStackScreenProps,
} from 'types/react-navigation/declarations';

export function useGetProfile(enabledQuery: boolean = false) {
  const queryResult = useQuery({
    queryKey: [CACHE_KEYS.PROFILE],
    queryFn: verifyToken,
    enabled: enabledQuery,
  });
  const {error} = queryResult;
  const navigation =
    useNavigation<
      PublicStackScreenProps<keyof PublicStackScreenList>['navigation']
    >();
  const toast = useToast();

  useEffect(() => {
    if (!error) {
      return;
    }
    console.log('Error at useGetProfile ', error);
    if (error instanceof AxiosError) {
      // eslint-disable-next-line eqeqeq
      if (error.response?.status == HttpStatusCode.Unauthorized) {
        // should login back
        toast.show('Session expired, Please login back!', {
          type: 'danger',
        });
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'SignIn',
            },
          ],
        });
      }
    }
  }, [error, navigation, toast]);

  return queryResult;
}
