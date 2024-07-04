import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import resetPassword from 'api/account/resetPassword';
import {AxiosError, HttpStatusCode} from 'axios';
import {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useToast} from 'react-native-toast-notifications';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';
import {z} from 'zod';

const schema = z
  .object({
    otp: z
      .string({
        required_error: 'OTP is required!',
      })
      .max(6, 'Should not exceed 6 digits!'),
    email: z.string({
      required_error: 'Email is required!',
    }),
    password: z
      .string({
        required_error: 'Password is required!',
      })
      .min(6, 'Should be at least 6 characters or digits!'),
    confirmPassword: z
      .string({
        required_error: 'Password is required!',
      })
      .min(6, 'Should be at least 6 characters or digits!'),
  })
  .refine(data => data.confirmPassword === data.password, {
    message: 'Confirm password must be same with password!',
    path: ['confirmPassword'],
  });

type FormType = z.infer<typeof schema>;

export function useResetPassword() {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const {mutateAsync, isPending, error} = useMutation({
    mutationKey: ['reset-password'],
    mutationFn: resetPassword,
  });
  const {handleSubmit} = form;
  const toast = useToast();
  const navigation =
    useNavigation<PublicStackScreenProps<'ResetPassword'>['navigation']>();
  const submit = useCallback(() => {
    handleSubmit(async formData => {
      const response = await mutateAsync({
        email: formData.email,
        otp: formData.otp,
        password: formData.password,
      });
      if (response.status === HttpStatusCode.Ok) {
        toast.show('Successfully reset password!', {
          type: 'success',
        });
        navigation.reset({
          index: 1,
          routes: [
            {
              name: 'ResetPasswordEntry',
            },
            {
              name: 'SignIn',
            },
          ],
        });
      }
    })();
  }, [mutateAsync, handleSubmit, toast, navigation]);

  useEffect(() => {
    if (error) {
      console.log('Error at useResetPassword ', error);
      if (error instanceof AxiosError) {
        // eslint-disable-next-line eqeqeq
        if (error.response?.status == HttpStatusCode.BadRequest) {
          toast.show('Invalid OTP!', {
            type: 'danger',
          });
        }
      }
    }
  }, [error, toast]);

  return {
    form,
    isPending,
    submit,
  };
}
