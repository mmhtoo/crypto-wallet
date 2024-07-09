import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import signUp from 'api/account/signUp';
import walletCreate from 'api/wallet/walletCreate';
import {AxiosError, HttpStatusCode} from 'axios';
import {useAppDispatch} from 'hooks';
import {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useToast} from 'react-native-toast-notifications';
import {addToken, addUserInfo} from 'redux/slices/user-slice/userSlice';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';
import {z} from 'zod';

const schema = z.object({
  email: z
    .string({required_error: 'Email is required!'})
    .email('Invalid email format!'),
  username: z.string({required_error: 'Username is required!'}),
  password: z
    .string({required_error: 'Password is required!'})
    .min(6, 'Password should be at least 6 characters or digits!'),
});

type FormType = z.infer<typeof schema>;

export function useSignUp() {
  const dispatch = useAppDispatch();
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const {mutateAsync, isPending, error} = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: signUp,
  });

  const {mutateAsync: createWallet, error: createWalletError} = useMutation({
    mutationKey: ['wallet-create'],
    mutationFn: walletCreate,
  });

  const {handleSubmit} = form;
  const toast = useToast();
  const navigation =
    useNavigation<PublicStackScreenProps<'SignUp'>['navigation']>();
  const submit = useCallback(() => {
    handleSubmit(async formData => {
      const response = await mutateAsync({
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });
      if (response.status === HttpStatusCode.Created) {
        toast.show('Registration successful!', {
          type: 'success',
        });
        const {user, access, refresh} = response.data;
        dispatch(addToken({accessToken: access, refreshToken: refresh}));
        dispatch(addUserInfo({userInfo: user}));
        setTimeout(async () => {
          await createWallet({
            user: user.id,
            address: 'aa',
            balance: '1234',
          });
          if (createWalletError) {
            toast.show('Wallet create failed!');
            return;
          }
          navigation.navigate('RootTab', {screen: 'Wallet'});
        }, 10);
        navigation.navigate('RootTab', {screen: 'Wallet'});
      }
    })();
  }, [
    mutateAsync,
    handleSubmit,
    toast,
    navigation,
    createWallet,
    dispatch,
    createWalletError,
  ]);

  useEffect(() => {
    if (error) {
      console.log('Error at useSignUp', error);
      if (error instanceof AxiosError) {
        // eslint-disable-next-line eqeqeq
        if (error.response?.status == HttpStatusCode.BadRequest) {
          toast.show('Failed to sign up!', {
            type: 'danger',
          });
          // eslint-disable-next-line eqeqeq
        } else if (error.response?.status == HttpStatusCode.Conflict) {
          toast.show('Account with that email already exists', {
            type: 'danger',
          });
        }
      }
    }
  }, [error, toast]);
  return {form, isPending, submit};
}
