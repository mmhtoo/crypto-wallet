import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SafeAreaLayout(props: PropsWithChildren) {
  const theme = useTheme();
  const style = {...styles.root, backgroundColor: theme.colors.background};
  return <SafeAreaView style={style}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
});
