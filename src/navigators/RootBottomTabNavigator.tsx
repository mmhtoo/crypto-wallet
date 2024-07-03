import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {darkTheme} from '../constants';
import React, {FC} from 'react';
import {Pressable, StyleSheet, TextStyle, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';
import {HistoryIcon, ProfileIcon, WalletIcon} from 'assets/icons';
import {RootBottomTabScreenList} from 'types/react-navigation/declarations';

const Tab = createBottomTabNavigator<RootBottomTabScreenList>();

export default function RootBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={CustomTabBar}
      sceneContainerStyle={styles.sceneContainer}>
      <Tab.Screen
        name={'Wallet'}
        getComponent={() => require('screens').WalletScreen}
      />
      <Tab.Screen
        name={'TransactionHistory'}
        getComponent={() => require('screens').TransactionHistoryScreen}
      />
      <Tab.Screen
        name={'Profile'}
        getComponent={() => require('screens').ProfileScreen}
      />
    </Tab.Navigator>
  );
}

type TBottomTabItem = {
  label: string;
  Icon: FC<SvgProps>;
  href: keyof RootBottomTabScreenList;
};

const TAB_BAR_SCREENS: Array<TBottomTabItem> = [
  {
    label: 'Wallet',
    Icon: WalletIcon,
    href: 'Wallet',
  },
  {
    label: 'History',
    Icon: HistoryIcon,
    href: 'TransactionHistory',
  },
  {
    label: 'Profile',
    Icon: ProfileIcon,
    href: 'Profile',
  },
];

const CustomTabBar: FC<BottomTabBarProps> = ({state, navigation}) => {
  const containerStyle = StyleSheet.compose(styles.tabBarContainer, {
    backgroundColor: darkTheme.colors?.background,
  });
  const activeIndex = state.index;
  const labelStyle = (isActive: boolean): TextStyle => ({
    color: isActive ? darkTheme.colors?.primary : 'white',
  });

  return (
    <View style={containerStyle}>
      {TAB_BAR_SCREENS.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <Pressable
            key={item.href}
            onPress={() => navigation.navigate(item.href)}>
            <View style={styles.tabBarItemContainer}>
              <item.Icon
                width={20}
                height={20}
                fill={isActive ? darkTheme.colors?.primary : 'white'}
              />
              <Text style={labelStyle(index === activeIndex)}>
                {item.label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: '#010104',
  },
  tabBarContainer: {
    width: '100%',
    paddingHorizontal: 32,
    flexDirection: 'row',
    columnGap: 32,
    justifyContent: 'space-between',
  },
  tabBarItemContainer: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    rowGap: 8,
  },
});
