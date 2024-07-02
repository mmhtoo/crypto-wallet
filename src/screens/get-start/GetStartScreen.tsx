import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GetStartIcon} from 'assets/icons';
import {color, fontFamily, SIZE} from 'styles';
import {Button} from 'components';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';

const GetStartScreen = ({navigation}: PublicStackScreenProps<'GetStart'>) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <GetStartIcon />
      </View>
      <View style={styles.bottomContainer}>
        <View style={{gap: 5}}>
          <Text style={styles.codeMalText}>Code Mal</Text>
          <Text style={styles.wallet}>Wallet</Text>
        </View>
        <View style={{}}>
          <Button
            title="Get Started"
            onPress={() => {
              navigation.navigate('Preview');
            }}
          />
        </View>
        <View style={{}}>
          <Text style={styles.byTappingText}>
            By tapping “Get Started” you agree and consent to our
          </Text>
          <View style={styles.privacyPolicyContainer}>
            <Text style={styles.privacyPolicyText}>Terms of Service</Text>
            <Text style={styles.byTappingText}>and</Text>
            <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GetStartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundColor,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 20,
    paddingBottom: 60,
  },
  codeMalText: {
    color: color.white,
    fontSize: SIZE.xxxxl,
    fontWeight: '500',
    fontFamily: fontFamily.juraMedium,
  },
  wallet: {
    color: color.white,
    fontSize: 30,
    fontWeight: '500',
    fontFamily: fontFamily.juraMedium,
  },
  byTappingText: {
    color: '#9B97DD',
    textAlign: 'center',
    fontSize: SIZE.m,
    fontWeight: '400',
    fontFamily: fontFamily.medium,
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    justifyContent: 'center',
    fontFamily: fontFamily.medium,
  },
  privacyPolicyText: {
    color: color.primaryColor,
    textAlign: 'center',
    fontSize: SIZE.m,
    fontWeight: '400',
    fontFamily: fontFamily.medium,
  },
});
