import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {CrossIcon} from 'assets/icons';
import {color} from 'styles';
import {SafeAreaView} from 'react-native-safe-area-context';

type LayoutProps = {
  children: ReactNode;
  onPress?: () => void;
};

const AuthLayout = ({children, onPress}: LayoutProps) => {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.crossIconContainer}
          activeOpacity={0.7}
          onPress={onPress}>
          <CrossIcon />
        </TouchableOpacity>
        <View style={{flex: 1}}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundColor,
  },
  crossIconContainer: {
    padding: 24,
    width: 17,
    alignItems: 'center',
  },
});
