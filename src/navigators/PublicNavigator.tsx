import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStartScreen,
  PreviewScreen,
  SignInScreen,
  SignUpScreen,
} from 'screens';
import {RootStackScreenList} from 'types/react-navigation/declarations';

const Stack = createNativeStackNavigator<RootStackScreenList>();

function PublicNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="GetStart">
      <Stack.Screen name="GetStart" component={GetStartScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;
