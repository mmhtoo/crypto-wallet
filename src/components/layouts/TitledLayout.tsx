import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

type Props = {
  title: string;
  onPressBack?: () => void;
};

export default function TitledLayout(props: PropsWithChildren<Props>) {
  const {title, children} = props;
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text>{title}</Text>
      </View>
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  childContainer: {
    flex: 1,
  },
});
