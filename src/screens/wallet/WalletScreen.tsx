import {SafeAreaLayout} from 'components';
import {useAppSelector} from 'hooks';
import React from 'react';
import {Text} from 'react-native-paper';
import {selectToken} from 'redux/slices/user-slice/userSlice';

export default function WalletScreen() {
  const token = useAppSelector(selectToken);

  return (
    <SafeAreaLayout>
      <Text>Wallet Screen</Text>
      <Text>{token?.accessToken}</Text>
    </SafeAreaLayout>
  );
}
