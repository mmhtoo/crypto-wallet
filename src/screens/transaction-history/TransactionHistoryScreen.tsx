import {SafeAreaLayout} from 'components';
import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontFamily} from 'styles';
import TransactionHistory from './components/TransactionHistory';
import useGetTransactionHistories from './hooks/useGetTransactionHistories';

const EmptyTransaction = () => {
  const height = Dimensions.get('window').height;
  return (
    <View
      style={StyleSheet.compose(styles.emptyContainer, {
        height: height - height * 0.2,
      })}>
      <Text variant={'labelLarge'}>No transaction yet!</Text>
    </View>
  );
};

export default function TransactionHistoryScreen() {
  const {data, refetch, isRefetching} = useGetTransactionHistories();
  const transactions = data || [];

  return (
    <SafeAreaLayout style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Transaction History</Text>
        </View>
        <View style={styles.listWrapper}>
          <FlatList
            data={transactions}
            keyExtractor={item => item.transaction_hash}
            renderItem={({item}) => (
              <TransactionHistory
                amount={item.amount}
                issuedDate={item.timestamp}
                transactionType={'cash-out'}
                fee={item.fee}
                id={item.transaction_hash}
                recipient={item.recipient}
                status={item.status}
              />
            )}
            onRefresh={refetch}
            refreshing={isRefetching}
            ListEmptyComponent={<EmptyTransaction />}
          />
        </View>
      </View>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 0,
  },
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
  listWrapper: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
