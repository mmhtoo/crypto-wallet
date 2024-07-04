import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {requestOTP} from 'api';
import {AxiosError, HttpStatusCode} from 'axios';
import {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useToast} from 'react-native-toast-notifications';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';
import {z} from 'zod';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required!',
    })
    .email('Invalid email format!'),
});

type FormType = z.infer<typeof schema>;

export function useRequestOTP() {
  const {mutateAsync, isPending, error, data} = useMutation({
    mutationKey: ['request-otp'],
    mutationFn: requestOTP,
  });
  const toast = useToast();

  useEffect(() => {
    if (!error) {
      return;
    }
    console.log('Error at useRequestOTP ', error);
    if (error instanceof AxiosError) {
      // eslint-disable-next-line eqeqeq
      if (error.response?.status == HttpStatusCode.NotFound) {
        toast.show(error.message, {
          type: 'danger',
        });
      }
      if (error.response?.status == HttpStatusCode.BadRequest) {
        toast.show('Failed to send OTP!', {
          type: 'danger',
        });
      }
    }
  }, [error, data, toast]);

  return {
    isPending,
    mutateAsync,
    error,
  };
}

export function useRequestOTPForm() {
  const {mutateAsync, isPending} = useRequestOTP();
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const navigation =
    useNavigation<PublicStackScreenProps<'ResetPasswordEntry'>['navigation']>();
  const toast = useToast();

  const submit = useCallback(() => {
    form.handleSubmit(async formData => {
      const response = await mutateAsync(formData.email);
      console.log(response);
      // eslint-disable-next-line eqeqeq
      if (response.status == HttpStatusCode.Ok) {
        toast.show(response.data.message, {
          type: 'success',
        });
        navigation.navigate('ResetPassword', {
          email: formData.email,
        });
        return;
      }
    })();
  }, [mutateAsync, form, navigation, toast]);

  return {
    form,
    isPending,
    submit,
  };
}
