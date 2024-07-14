import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export type WalletDetailData = {
  user: number;
  address: string;
  balance: number;
};

export const getWalletDetail = async () => {
  try {
    const response: AxiosResponse<WalletDetailData | {detail: string}> =
      await axiosInstance.get('/trc-20/wallet/details/');
    return response;
  } catch (e) {
    console.log('Error at getWalletDetail ', e);
    throw e;
  }
};
