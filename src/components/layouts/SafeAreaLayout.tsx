import React, {PropsWithChildren} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SafeAreaLayout(
  props: PropsWithChildren<{style?: ViewStyle}>,
) {
  const theme = useTheme();
  const {children, style: customStyle = {}} = props;
  const style = {...styles.root, backgroundColor: theme.colors.background};
  return (
    <SafeAreaView style={StyleSheet.compose(style, customStyle)}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
});
