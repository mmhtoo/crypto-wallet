import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.root}>
      <Text>Sign Up Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
});
