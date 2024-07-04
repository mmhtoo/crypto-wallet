import {HeaderLayout} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import {fontFamily} from 'styles';

export default function TransactionHistoryDetailScreen() {
  return (
    <HeaderLayout title={'Transaction History'}>
      <View style={styles.root}>
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Transaction Type:</Text>
          <Text style={styles.value}>Cash In</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Transaction Hash:</Text>
          <Text style={styles.value}>fdfdkkjiheehhcs</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Recipient:</Text>
          <Text style={styles.value}>Cyanide</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>$1000</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Fee:</Text>
          <Text style={styles.value}>$5</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Transaction Date:</Text>
          <Text style={styles.value}>01-01-2024 13:00</Text>
        </View>
        <Divider />
        <View style={styles.itemWrapper}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>Pending</Text>
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
    fontFamily: fontFamily.thin,
    fontWeight: '300',
  },
});
