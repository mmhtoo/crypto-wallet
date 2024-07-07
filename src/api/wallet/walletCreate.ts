import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export type WalletCreateParam = {
  user: number;
  address: string;
  balance: string;
};

export default async function walletCreate(param: WalletCreateParam) {
  try {
    const response: AxiosResponse<{message: string}> = await axiosInstance.post(
      '/trc-20/wallet/',
      param,
    );
    return response;
  } catch (error) {
    console.log('Error at create wallet', error);
    throw error;
  }
}
