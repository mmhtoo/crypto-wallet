import {signIn, SignInSuccessResponse} from 'api';
import {useMutation} from '@tanstack/react-query';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useCallback} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {AxiosError, HttpStatusCode} from 'axios';
import {useAppDispatch} from 'hooks';
import {addToken} from 'redux/slices/user-slice/userSlice';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from 'types/react-navigation/declarations';

const schema = z.object({
  email: z.string({
    required_error: 'Email is required!',
  }),
  password: z.string({
    required_error: 'Password is required!',
  }),
});

type FormType = z.infer<typeof schema>;

export function useSignIn() {
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['sign-in'],
    mutationFn: signIn,
    onError: err => {
      console.log('Error at useSignIn ', err);
      if (err instanceof AxiosError) {
        if (err.response?.status == HttpStatusCode.Unauthorized) {
          return toast.show('Bad Credentials!', {
            type: 'danger',
          });
        }
      }
    },
  });
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const toast = useToast();
  const {handleSubmit} = form;
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<RootStackScreenProps<'PublicStack'>['navigation']>();
  const submitSignIn = useCallback(() => {
    handleSubmit(async formData => {
      console.log(formData);
      const response = await mutateAsync(formData);
      const responseBody = response.data;

      if (
        // eslint-disable-next-line eqeqeq
        response.status == HttpStatusCode.Ok
      ) {
        const data = responseBody as SignInSuccessResponse;
        dispatch(
          addToken({
            accessToken: data.access,
            refreshToken: data.refresh,
          }),
        );
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'RootTab',
            },
          ],
        });
        toast.show('Successfully logged in!');

        return;
      }
    })();
  }, [mutateAsync, handleSubmit, toast, dispatch, navigation]);

  return {
    form,
    isPending,
    submitSignIn,
  };
}
