import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export const refreshToken = async (refresh: string) => {
  try {
    const response: AxiosResponse<{
      refresh?: string;
      access?: string;
    }> = await axiosInstance.post('/auth/token/refresh/', {
      refresh,
    });
    return response;
  } catch (e) {
    console.log('Error at refreshToken ', e);
    throw e;
  }
};
