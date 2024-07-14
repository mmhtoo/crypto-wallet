import {HeaderLayout} from 'components';
import dayjs from 'dayjs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import {fontFamily} from 'styles';
import {RootStackScreenProps} from 'types/react-navigation/declarations';

export default function TransactionHistoryDetailScreen({
  route,
}: RootStackScreenProps<'TransactionHistoryDetail'>) {
  const {
    amount,
    fee,
    recipient,
    status,
    timestamp,
    transactionHash,
    transactionType,
  } = route.params;
  return (
    <HeaderLayout title={'Transaction History'}>
      <View style={styles.root}>
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Transaction Type:</Text>
          <Text style={styles.value}>{transactionType}</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Transaction Hash:</Text>
          <Text style={styles.value}>{transactionHash}</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Recipient:</Text>
          <Text style={styles.value}>{recipient}</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>{amount}</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Fee:</Text>
          <Text style={styles.value}>{fee || '-'}</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Transaction Date:</Text>
          <Text style={styles.value}>
            {dayjs(timestamp).format('YYYY-MM-YY HH:mm:ss')}
          </Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{status || '-'}</Text>
        </View>
        <Divider />
      </View>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 80,
    rowGap: 8,
  },
  itemWrapper: {
    flexDirection: 'row',
    paddingVertical: 8,
    columnGap: 32,
    paddingHorizontal: 4,
  },
  label: {
    width: '50%',
    fontSize: 16,
    fontFamily: fontFamily.bold,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    width: '50%',
    maxWidth: '40%',
    fontFamily: fontFamily.thin,
    fontWeight: '300',
  },
});
