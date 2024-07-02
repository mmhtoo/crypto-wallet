import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fontFamily, SIZE} from 'styles';

type PreviewItemProps = {
  count: number | string;
  label: string;
};

const PreviewItem = ({count, label}: PreviewItemProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PreviewItem;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  countContainer: {
    backgroundColor: color.primaryColor,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
  },
  countText: {
    color: color.white,
    fontFamily: fontFamily.medium,
    fontSize: SIZE.xxl,
  },
  label: {
    color: color.white,
    fontFamily: fontFamily.regular,
    fontSize: SIZE.xxl,
  },
});
