import {TransactionData} from 'api/wallet/transferCoin';
import {AxiosResponse} from 'axios';
import {axiosInstance} from 'libs';

export default async function getTransactionHistoryDetail(
  transactionHash: string,
) {
  try {
    const response: AxiosResponse<TransactionData | undefined> =
      await axiosInstance.get(`/trc-20/transaction/${transactionHash}`);
    return response;
  } catch (e) {
    console.log('Error at getTransactionHistoryDetail ', e);
    throw e;
  }
}
