import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Budget: undefined;
};

export type BudgetStackParamList = {
  "Budget List": undefined;
  "Budget Details": undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export type BudgetRouteProps = NativeStackScreenProps<
  BudgetStackParamList,
  "Budget List"
>;
