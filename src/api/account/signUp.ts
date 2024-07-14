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
    id: number;
    last_login?: Date;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    user_id: string;
    last_login_ip: string;
    email: string;
    phone?: string;
    username: string;
    photo: string;
    date_of_birth?: Date;
    groups: string[];
    user_permissions: string[];
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
