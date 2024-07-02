import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

export const lightTheme: ThemeProp = {
  ...MD3LightTheme,
  colors: {
    primary: '#2914E3',
    secondary: '#03002E',
    error: '#E70000',
    onPrimary: '#EAE9FC',
  },
};

export const darkTheme: ThemeProp = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: 'black',
    primary: '#2914E3',
    secondary: '#03002E',
    error: '#E70000',
    onPrimary: '#EAE9FC',
  },
  roundness: 1.5,
};
