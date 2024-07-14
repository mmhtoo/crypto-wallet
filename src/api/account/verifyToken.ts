import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export interface UserData {
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
}

export interface InfoResponse {
  detail: string;
  code: string;
  messages: {
    token_class: string;
    token_type: string;
    message: string;
  }[];
}

export default async function verifyToken() {
  try {
    const response: AxiosResponse<UserData | InfoResponse> =
      await axiosInstance.get('/auth/token/verify/');
    return response;
  } catch (e) {
    console.log('Error at verifyToken ', e);
    throw e;
  }
}
