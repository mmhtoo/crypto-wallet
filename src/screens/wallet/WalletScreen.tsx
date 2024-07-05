import {SafeAreaLayout} from 'components';
import {useAppSelector} from 'hooks';
import React from 'react';
import {Text} from 'react-native-paper';

export default function WalletScreen() {
  const userInfo = useAppSelector(state => state.user.userInfo);
  const accessToken = useAppSelector(state => state.user.token?.accessToken);
  console.log(accessToken);
  return (
    <SafeAreaLayout>
      <Text>Wallet Screen</Text>
    </SafeAreaLayout>
  );
}
