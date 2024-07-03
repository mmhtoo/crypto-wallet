import {SafeAreaLayout} from 'components';
import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontFamily} from 'styles';
import TransactionHistory from './components/TransactionHistory';

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
  return (
    <SafeAreaLayout style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Transaction History</Text>
        </View>
        <View style={styles.listWrapper}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            keyExtractor={item => item.toString()}
            renderItem={() => (
              <>
                <TransactionHistory
                  amount={1000}
                  issuedDate={new Date()}
                  transactionType={'cash-in'}
                  id="1"
                />
                <TransactionHistory
                  amount={100}
                  issuedDate={new Date()}
                  transactionType={'cash-out'}
                  id="2"
                />
              </>
            )}
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
