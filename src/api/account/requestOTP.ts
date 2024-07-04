import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export const requestOTP = async (email: string) => {
  try {
    const response: AxiosResponse<{message: string}> = await axiosInstance.post(
      '/auth/request-otp/',
      {
        email,
      },
    );
    return response;
  } catch (e) {
    console.log('Error at requestOTP ', e);
    throw e;
  }
};
