import {SafeAreaLayout} from 'components';
import {useAppSelector, useCreateWallet} from 'hooks';
import React, {useCallback} from 'react';
import {Button, Text} from 'react-native-paper';
import {selectUserInfo} from 'redux/slices/user-slice/userSlice';
import useGetWalletDetail from './hooks/useGetWalletDetail';
import {StyleSheet, View} from 'react-native';
import {fontFamily} from 'styles';
import {HttpStatusCode} from 'axios';
import {useQueryClient} from '@tanstack/react-query';
import {CACHE_KEYS} from '../../constants';
import WalletDetail from './components/WalletDetail';
import {WalletDetailData} from 'api';

const NotFoundWallet = () => {
  const {isPending, mutateAsync} = useCreateWallet();
  const userInfo = useAppSelector(selectUserInfo);
  const queryClient = useQueryClient();
  const onPressCreateWallet = useCallback(async () => {
    if (!userInfo) {
      return;
    }
    const response = await mutateAsync({
      user: userInfo?.id,
      address: '',
      balance: '',
    });

    // eslint-disable-next-line eqeqeq
    if (response.status == HttpStatusCode.Created) {
      queryClient.invalidateQueries({
        queryKey: [CACHE_KEYS.WALLET_DETAIL],
      });
    }
  }, [mutateAsync, userInfo, queryClient]);

  return (
    <View style={styles.notFoundContainer}>
      <Text>Wallet Not Found!</Text>
      <Button disabled={isPending} onPress={onPressCreateWallet}>
        Create Wallet
      </Button>
    </View>
  );
};

export default function WalletScreen() {
  const {walletDetailRes, isPending, refetch, isRefetching} =
    useGetWalletDetail();
  const walletDetail = walletDetailRes?.data;

  return (
    <SafeAreaLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Wallet</Text>
        </View>
        {!walletDetailRes && !isPending && <NotFoundWallet />}
        {walletDetailRes && walletDetail && !isPending && (
          <WalletDetail
            address={(walletDetail as WalletDetailData).address}
            balance={(walletDetail as WalletDetailData).balance}
            onRefresh={refetch}
            isRefetching={isRefetching}
          />
        )}
      </View>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
  },
  title: {
    textAlign: 'center',
    fontFamily: fontFamily.juraBold,
    fontWeight: 'bold',
    fontSize: 20,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
