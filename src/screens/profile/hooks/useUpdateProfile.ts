import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import updateProfile from 'api/account/updateProfile';
import {AxiosError, HttpStatusCode} from 'axios';
import {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useToast} from 'react-native-toast-notifications';
import {z} from 'zod';

const schema = z.object({
  username: z
    .string({
      required_error: 'Username is required!',
    })
    .min(3, 'Should be at least 3 characters!'),
  email: z.string({
    required_error: 'Required!',
  }),
  dob: z.string().optional(),
});

type FormType = z.infer<typeof schema>;

export type OnAfterUpdateCallback = (param: {
  username: string;
  dob: string;
}) => void;

export default function useUpdateProfile(onAfterUpdate: OnAfterUpdateCallback) {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const {mutateAsync, isPending, error, ...otherProps} = useMutation({
    mutationKey: ['update-profile'],
    mutationFn: updateProfile,
  });
  const toast = useToast();

  const onSubmit = useCallback(() => {
    form.handleSubmit(async formData => {
      const response = await mutateAsync({
        username: formData.username,
        dob: formData.dob,
      });
      if (response.status === HttpStatusCode.Ok) {
        onAfterUpdate({
          username: formData.username,
          dob: formData.dob || '-',
        });
        toast.show('Successfully updated!', {
          type: 'success',
        });
        return;
      }
      toast.show('Failed to update!', {
        type: 'danger',
      });
    })();
  }, [mutateAsync, form, toast, onAfterUpdate]);

  useEffect(() => {
    if (error) {
      console.log('Error at useUpdateProfile ', error);
      if (error instanceof AxiosError) {
        // eslint-disable-next-line eqeqeq
        if (error.status == HttpStatusCode.BadRequest) {
          toast.show('Invalid data!', {
            type: 'danger',
          });
          return;
        }
        toast.show('Unknown Error!', {
          type: 'danger',
        });
      }
    }
  }, [error, toast]);

  return {
    form,
    isPending,
    error,
    onSubmit,
    ...otherProps,
  };
}
