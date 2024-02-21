import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from './src/@core/navigations/base.navigator';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </>
  );
}

