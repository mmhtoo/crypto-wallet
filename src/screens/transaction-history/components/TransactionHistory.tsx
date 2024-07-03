import {BackArrow} from 'assets/icons';
import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontFamily} from 'styles';
import dayjs from 'dayjs';

type TTransactionHistoryProps = {
  transactionType: 'cash-in' | 'cash-out';
  issuedDate: Date;
  amount: number;
  id: string;
};

export default function TransactionHistory(props: TTransactionHistoryProps) {
  const {transactionType, issuedDate, amount} = props;
  const label = transactionType === 'cash-in' ? 'Cash In' : 'Cash Out';
  const isPlus = transactionType === 'cash-in';
  const amountStyle: TextStyle = {
    color: isPlus ? '#17b978' : '#E70000',
  };
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.historyType}>{label}</Text>
          <Text style={StyleSheet.compose(styles.amount, amountStyle)}>
            {isPlus ? '+' : '-'} ${amount.toLocaleString()}
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
