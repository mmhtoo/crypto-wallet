import {ReloadIcon, SendIcon} from 'assets/icons';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import {fontFamily} from 'styles';
import WalletReceiveModal from './WalletReceiveModal';

type WalletDetailProps = {
  address: string;
  balance: number;
  onRefresh: () => void;
  isRefetching: boolean;
};

export default function WalletDetail(props: WalletDetailProps) {
  const {address, balance, onRefresh, isRefetching} = props;

  const [showReceiveModal, setShowReceiveModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowReceiveModal(true)}>
        <View style={styles.qrCode}>
          <QRCode value={address} size={220} />
        </View>
      </TouchableOpacity>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance: </Text>
        <Text style={styles.balance}>{balance ? balance : '...'}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity>
          <View style={styles.actionItem}>
            <SendIcon width={24} height={24} fill={'#fff'} />
            <Text>Transfer</Text>
          </View>
        </TouchableOpacity>
        {/* receive */}
        <>
          <TouchableOpacity onPress={() => setShowReceiveModal(true)}>
            <View style={styles.actionItem}>
              <SendIcon width={24} height={24} fill={'#fff'} />
              <Text>Receive</Text>
            </View>
          </TouchableOpacity>
          <WalletReceiveModal
            show={showReceiveModal}
            closeModal={() => setShowReceiveModal(false)}
            address={address}
          />
        </>
        <TouchableOpacity disabled={isRefetching} onPress={onRefresh}>
          <View style={styles.actionItem}>
            <ReloadIcon width={24} height={24} fill={'#fff'} />
            <Text>{isRefetching ? 'Refreshing...' : 'Refresh'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.medium,
  },
  balance: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: fontFamily.regular,
  },
  balanceContainer: {
    marginVertical: 16,
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    columnGap: 40,
    marginTop: 40,
  },
  actionText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
  },
  actionItem: {
    rowGap: 8,
    alignItems: 'center',
  },
  qrCode: {
    width: 220,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
