import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, fontFamily, SIZE} from 'styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const Button = ({title, onPress, disabled}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.mainContainer,
        {backgroundColor: disabled ? color.disabledColor : color.primaryColor},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  mainContainer: {
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  title: {
    color: color.white,
    fontSize: SIZE.xl,
    fontWeight: '400',
    fontFamily: fontFamily.regular,
  },
});
