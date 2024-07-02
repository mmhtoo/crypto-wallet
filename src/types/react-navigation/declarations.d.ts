import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackScreenList = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  GetStart: undefined;
  Preview: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackScreenList> =
  NativeStackScreenProps<RootStackScreenList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackScreenList {}
  }
}
