import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export type SignUpParam = {
  email: string;
  username: string;
  password: string;
};

type SignUpResponse = {
  message: string;
  user: {
    id: string;
    last_login: string;
    is_superuser: boolean;
    first_name: null | string;
    last_name: null | string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    user_id: string;
    last_login_ip: string;
    email: null | string;
    phone: null | string;
    username: null | string;
    photo: string;
    date_of_birth: null | string;
    groups: any;
    user_permissions: any;
  };
  access?: string;
  refresh?: string;
};

export default async function signUp(param: SignUpParam) {
  try {
    const response: AxiosResponse<SignUpResponse> = await axiosInstance.post(
      '/auth/register/',
      param,
    );
    return response;
  } catch (error) {
    console.log('Error at sign up', error);
    throw error;
  }
}
