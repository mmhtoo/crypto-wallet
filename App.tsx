import React from 'react';
import {PaperProvider, Text} from 'react-native-paper';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {theme} from './src/constants';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'red'} />
        <View style={styles.wrapper}>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  wrapper: {
    padding: 16,
  },
});
