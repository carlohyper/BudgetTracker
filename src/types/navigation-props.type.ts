import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;