import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Budget: undefined;
  AddNewBudget: undefined;
};

export type BudgetStackParamList = {
  "Budget List": undefined;
  "Budget Details": {
    budgetId: string | number;
  };
};

export type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export type BudgetRouteProps = NativeStackScreenProps<
  BudgetStackParamList,
  "Budget List",
  "Budget Details"
>;

export type AddStackParamList = {
  "Add Option": undefined;
  "Add Expense": undefined;
  "New Budget": undefined;
  "New Wallet": undefined;
  "New Budget Items": undefined;
  "List Options": {
    optionType: "income" | "expense";
  };
};

export type AddRouteProps = NativeStackScreenProps<
  AddStackParamList,
  "Add Option",
  "List Options"
>;
