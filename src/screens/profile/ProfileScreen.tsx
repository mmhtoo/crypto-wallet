import {ProfileIcon} from 'assets/icons';
import {SafeAreaLayout} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-paper';
import {fontFamily} from 'styles';

export default function ProfileScreen() {
  return (
    <SafeAreaLayout>
      <View style={styles.root}>
        <ProfileIcon
          width={64}
          height={64}
          fill={'white'}
          style={styles.profileIcon}
        />
        <View style={styles.editBtnContainer}>
          <Button>Edit</Button>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Username</Text>
            <Text style={styles.infoValue}>Lionel</Text>
          </View>
          <Divider />
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>lionel@gmail.com</Text>
          </View>
          <Divider />
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <Text style={styles.infoValue}>01-01-2000</Text>
          </View>
          <Divider />

          <Button style={styles.logoutBtn}>Logout</Button>
        </View>
      </View>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 80,
  },
  profileIcon: {
    padding: 8,
    alignSelf: 'center',
  },
  infoContainer: {},
  infoWrapper: {
    paddingVertical: 10,
    rowGap: 8,
    paddingHorizontal: 8,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: fontFamily.regular,
  },
  logoutBtn: {
    marginTop: 16,
  },
  editBtnContainer: {
    marginVertical: 16,
  },
});
