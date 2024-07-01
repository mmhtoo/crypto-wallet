import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResetPasswordScreen() {
  return (
    <View style={styles.root}>
      <Text>Reset password Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
});
