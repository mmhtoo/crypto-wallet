import {CloseIcon} from 'assets/icons';
import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import {color} from 'styles';

type WalletReceiveModalPropsType = {
  show: boolean;
  closeModal: () => void;
  address: string;
};

export default function WalletReceiveModal(props: WalletReceiveModalPropsType) {
  const {show, closeModal, address} = props;

  return (
    <Modal
      visible={show}
      statusBarTranslucent
      animationType={'fade'}
      transparent>
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={closeModal}>
              <CloseIcon width={18} height={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.qrContainer}>
            <QRCode value={address} size={260} backgroundColor={'white'} />
          </View>
          <View style={styles.textContainer}>
            <Text>Scan this QR code</Text>
            <Text>(OR)</Text>
          </View>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: '75%',
    maxWidth: 400,
    maxHeight: 600,
    backgroundColor: color.inputBackgroundColor,
    borderRadius: 8,
    alignItems: 'center',
    rowGap: 8,
    paddingTop: 32,
    justifyContent: 'center',
  },
  qrContainer: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  address: {
    maxWidth: '70%',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 16,
    paddingRight: 24,
  },
});
