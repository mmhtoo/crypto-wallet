import {CloseIcon} from 'assets/icons';
import {ControlledInput} from 'components';
import React from 'react';
import {FormProvider} from 'react-hook-form';
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Camera} from 'react-native-camera-kit';
import {Button, Text} from 'react-native-paper';
import {color} from 'styles';
import useTransfer from '../hooks/useTransfer';

type WalletTransferModalPropsType = {
  show: boolean;
  closeModal: () => void;
  address: string;
  totalBalance: number;
};

export default function WalletTransferModal(
  props: WalletTransferModalPropsType,
) {
  const {show, closeModal} = props;

  const {form, onSubmit, isPending} = useTransfer(closeModal);
  const watchedAddress = form.watch('recipient');

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
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} variant={'titleLarge'}>
              Transfer Coin
            </Text>
            <Text style={styles.titleText}>Scan Recipient QR and Transfer</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <>
              <View style={styles.cameraContainer}>
                {!watchedAddress && (
                  <Camera
                    scanBarcode
                    onReadCode={(event: any) => {
                      form.setValue(
                        'recipient',
                        String(event.nativeEvent.codeStringValue),
                      );
                    }}
                    style={styles.camera}
                  />
                )}
                {watchedAddress && (
                  <Text style={styles.address}>{watchedAddress}</Text>
                )}
              </View>
              <View style={styles.textContainer}>
                <Button onPress={() => form.setValue('recipient', '')}>
                  Re-scan
                </Button>
              </View>
              {watchedAddress && (
                <FormProvider {...form}>
                  <ControlledInput
                    placeholder={'Coin amount'}
                    keyboardType={'number-pad'}
                    fieldName={'amount'}
                  />
                </FormProvider>
              )}
            </>
            <View style={styles.btnContainer}>
              <Button disabled={isPending} onPress={closeModal}>
                Cancel
              </Button>
              <Button
                onPress={onSubmit}
                disabled={isPending}
                mode={'contained'}>
                Continue
              </Button>
            </View>
          </ScrollView>
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
    height: '90%',
    maxWidth: 400,
    maxHeight: 800,
    backgroundColor: color.inputBackgroundColor,
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 24,
  },
  cameraContainer: {
    width: 280,
    height: 260,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    textAlign: 'center',
    maxWidth: '70%',
  },
  camera: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    zIndex: 0,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  titleText: {
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 16,
    paddingRight: 24,
  },
  titleContainer: {
    marginBottom: 32,
    rowGap: 8,
  },
  scrollContent: {
    width: '100%',
    paddingBottom: 32,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 32,
    marginTop: 8,
  },
});
