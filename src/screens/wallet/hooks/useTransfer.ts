import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import transferCoin from 'api/wallet/transferCoin';
import {AxiosError, HttpStatusCode} from 'axios';
import {CACHE_KEYS} from '../../../constants';
import {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {z} from 'zod';

const schema = z.object({
  recipient: z.string({
    required_error: 'Required!',
  }),
  amount: z.coerce.number({
    required_error: 'Required!',
  }),
});

type FormType = z.infer<typeof schema>;

export default function useTransfer(callback: () => void) {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const {mutateAsync, error, ...otherProps} = useMutation({
    mutationKey: ['transfer-coin'],
    mutationFn: transferCoin,
  });
  const toast = useToast();
  const queryClient = useQueryClient();

  const onSubmit = useCallback(() => {
    form.handleSubmit(async formData => {
      const response = await mutateAsync(formData);
      // eslint-disable-next-line eqeqeq
      if (response.status == HttpStatusCode.Created) {
        form.reset();
        queryClient.invalidateQueries({
          queryKey: [CACHE_KEYS.WALLET_DETAIL],
        });
        callback();
        toast.show('Success!', {
          type: 'success',
        });
      }
    })();
  }, [mutateAsync, form, queryClient, callback, toast]);

  useEffect(() => {
    if (!error) {
      return;
    }
    if (error instanceof AxiosError) {
      // eslint-disable-next-line eqeqeq
      if (error.response?.status == HttpStatusCode.BadRequest) {
        return Alert.alert('Invalid request!');
        // eslint-disable-next-line eqeqeq
      } else if (error.response?.status == HttpStatusCode.NotFound) {
        return Alert.alert('Wallet Not Found!');
        // eslint-disable-next-line eqeqeq
      } else if (error.response?.status == HttpStatusCode.FailedDependency) {
        return Alert.alert('Insufficient balance!');
      } else {
        Alert.alert('Unknown Error!');
      }
    }
  }, [error, toast]);

  return {
    form,
    onSubmit,
    ...otherProps,
  };
}
