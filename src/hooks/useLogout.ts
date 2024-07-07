import {useNavigation} from '@react-navigation/native';
import {
  RootStackScreenList,
  RootStackScreenProps,
} from 'types/react-navigation/declarations';
import {useAppDispatch} from './useReduxHooks';
import {useCallback} from 'react';
import {resetUser} from 'redux/slices/user-slice/userSlice';
import {useToast} from 'react-native-toast-notifications';

export function useLogout() {
  const navigation =
    useNavigation<
      RootStackScreenProps<keyof RootStackScreenList>['navigation']
    >();
  const dispatch = useAppDispatch();
  const toast = useToast();

  return useCallback(() => {
    dispatch(resetUser());
    toast.show('Successfully logged');
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'PublicStack',
          params: {
            screen: 'SignIn',
          },
        },
      ],
    });
  }, [navigation, dispatch, toast]);
}
