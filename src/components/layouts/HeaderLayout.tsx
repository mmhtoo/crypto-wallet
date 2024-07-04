import React, {PropsWithChildren} from 'react';
import SafeAreaLayout from './SafeAreaLayout';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BackArrow} from '../../assets/icons';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {fontFamily} from 'styles';

type HeaderLayoutProps = {
  title?: string;
};

export default function HeaderLayout(
  props: PropsWithChildren<HeaderLayoutProps>,
) {
  const {children, title} = props;
  const navigation = useNavigation();
  return (
    <SafeAreaLayout>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.canGoBack() && navigation.goBack()}>
          <BackArrow width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.childWrapper}>{children}</View>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
  },
  childWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fontFamily.juraBold,
    width: '90%',
    textAlign: 'center',
    marginLeft: 24,
    transform: [
      {
        translateX: -28,
      },
    ],
  },
});
