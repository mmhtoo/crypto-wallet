import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PublicStackScreenList = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPasswordEntry: undefined;
  ResetPassword: {
    email: string;
  };
  GetStart: undefined;
  Preview: undefined;
};

export type PublicStackScreenProps<T extends keyof PublicStackScreenList> =
  CompositeScreenProps<
    NativeStackScreenProps<PublicStackScreenList, T>,
    RootStackScreenProps<keyof RootStackScreenList>
  >;

export type RootStackScreenList = {
  PublicStack: NavigatorScreenParams<PublicStackScreenList>;
};

export type RootStackScreenProps<T extends keyof RootStackScreenList> =
  NativeStackScreenProps<RootStackScreenList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackScreenList {}
  }
}
