import {TransactionData} from 'api/wallet/transferCoin';
import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export default async function getTransactionHistories() {
  try {
    const response: AxiosResponse<Array<TransactionData> | undefined> =
      await axiosInstance.get('/trc-20/transaction/history/');
    return response.data;
  } catch (e) {
    console.log('Error at getTransactionHistories ', e);
    throw e;
  }
}
