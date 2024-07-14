import {BackArrow} from 'assets/icons';
import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontFamily} from 'styles';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
import {RootBottomTabScreenProps} from 'types/react-navigation/declarations';

type TTransactionHistoryProps = {
  transactionType: 'cash-in' | 'cash-out';
  issuedDate: Date | string;
  amount: number;
  id: string;
  status: string;
  fee: number | null;
  recipient: string;
};

export default function TransactionHistory(props: TTransactionHistoryProps) {
  const {transactionType, issuedDate, amount, fee, id, recipient, status} =
    props;
  const label = transactionType === 'cash-in' ? 'Cash In' : 'Cash Out';
  const isPlus = transactionType === 'cash-in';
  const amountStyle: TextStyle = {
    color: isPlus ? '#17b978' : '#E70000',
  };

  const navigation =
    useNavigation<
      RootBottomTabScreenProps<'TransactionHistory'>['navigation']
    >();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('TransactionHistoryDetail', {
          transactionHash: id,
          amount,
          fee,
          recipient,
          status,
          timestamp: issuedDate,
          transactionType: 'Cash Out',
        })
      }>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.historyType}>{label}</Text>
          <Text style={StyleSheet.compose(styles.amount, amountStyle)}>
            {isPlus ? '+' : '-'}
            {amount.toLocaleString()}
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.date}>
            {dayjs(issuedDate).format('DD/MM/YYYY HH:mm')}
          </Text>
          <TouchableOpacity>
            <BackArrow style={styles.arrow} width={16} height={16} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#03002E',
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  historyType: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    fontFamily: fontFamily.thin,
    fontWeight: '300',
  },
  amount: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrow: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
});
