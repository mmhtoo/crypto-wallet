import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fontFamily, SIZE} from 'styles';
import {AuthLayout, Button} from 'components';
import {LockIcon} from 'assets/icons';
import PreviewItem from './components/PreviewItem';
import {RootStackScreenProps} from 'types/react-navigation/declarations';

const PreviewScreen = ({navigation}: RootStackScreenProps<'Preview'>) => {
  return (
    <AuthLayout onPress={() => navigation.goBack()}>
      <View style={styles.mainContainer}>
        <View style={styles.lockIcon}>
          <LockIcon />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.createAccountText}>To create a new wallet,</Text>
          <Text style={styles.createAccountText}>
            Let's secure your account
          </Text>
          <View style={{gap: 26, marginTop: 26}}>
            <PreviewItem label="Create your account" count={1} />
            <PreviewItem label="Secure your account" count={2} />
            <PreviewItem label="Confirm your PIN" count={3} />
          </View>
        </View>
        <View style={{paddingBottom: 80}}>
          <Button title="Continue" onPress={() => {}} />
        </View>
      </View>
    </AuthLayout>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundColor,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  lockIcon: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  createAccountText: {
    color: color.white,
    fontFamily: fontFamily.regular,
    fontSize: SIZE.xxxl,
  },
});
