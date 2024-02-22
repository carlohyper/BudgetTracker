import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Budget: undefined;
  AddNewBudget: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
