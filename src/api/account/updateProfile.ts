import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';
import {UserData} from './verifyToken';

type UpdateProfileParamType = {
  username: string;
  dob?: string;
};

export default async function updateProfile(param: UpdateProfileParamType) {
  try {
    const response: AxiosResponse<UserData | undefined> =
      await axiosInstance.put('/profile/update/', {
        username: param.username,
        date_of_birth: param.dob,
      });
    return response;
  } catch (e) {
    console.log('Error at updateProfile ', e);
    throw e;
  }
}
