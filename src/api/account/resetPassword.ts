import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export type ResetPasswordParam = {
  otp: string;
  email: string;
  password: string;
};

export default async function resetPassword(param: ResetPasswordParam) {
  try {
    const response: AxiosResponse<{message: string}> = await axiosInstance.post(
      '/auth/reset-password/',
      param,
    );
    return response;
  } catch (e) {
    console.log('Error at resetPassword ', e);
    throw e;
  }
}
