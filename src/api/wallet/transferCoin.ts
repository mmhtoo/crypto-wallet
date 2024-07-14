import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

type TransferCoinParamType = {
  recipient: string;
  amount: number;
};

export type TransactionData = {
  sender: string;
  amount: number;
  transaction_hash: string;
  status: string;
  timestamp: string | Date;
  block_number: number;
  fee: number | null;
};

export default async function transferCoin(param: TransferCoinParamType) {
  try {
    const response: AxiosResponse<TransactionData | undefined> =
      await axiosInstance.post('/trc-20/transaction/', param);
    return response;
  } catch (e) {
    console.log('Error at transferCoin ', e);
    throw e;
  }
}
