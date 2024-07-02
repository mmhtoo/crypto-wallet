import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {CrossIcon} from 'assets/icons';
import {color} from 'styles';

type LayoutProps = {
  children: ReactNode;
  onPress?: () => void;
};

const AuthLayout = ({children, onPress}: LayoutProps) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.crossIconContainer}
          activeOpacity={0.7}
          onPress={onPress}>
          <CrossIcon />
        </TouchableOpacity>
        <View style={{flex: 1}}>{children}</View>
      </View>
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
    paddingHorizontal: 24,
    paddingTop: 24,
    width: 17,
    alignItems: 'center',
  },
});
