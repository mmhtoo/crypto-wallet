import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

type SignInParam = {
  email: string;
  password: string;
};

export interface SignInSuccessResponse {
  access: string;
  refresh: string;
}

export interface SignInDetailResponse {
  detail: string;
}

export const signIn = async (param: SignInParam) => {
  try {
    const response: AxiosResponse<
      SignInDetailResponse | SignInSuccessResponse
    > = await axiosInstance.post('/auth/token/obtain/', param);
    return response;
  } catch (e) {
    console.log('Error at signIn ', e);
    throw e;
  }
};
