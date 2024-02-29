import * as React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { ExpenseItem, IncomeItem } from "../interfaces";
import { BudgetStackParamList } from "@types";
import { useExpenseStore } from "src/stores/expense.store";
import { getTotalAmount, getCategory } from "@core/helpers";

export const useBudgetDetails = () => {
  const navigation = useNavigation();
  const [selectedBtn, setSelectedBtn] = React.useState(0);
  const route = useRoute<RouteProp<BudgetStackParamList, "Budget Details">>();
  const { budgetId } = route.params;

  const { data } = useExpenseStore((state) => state);

  const filteredData = data.budget.filter((item) => item.id === budgetId)[0];

  const plannedTotal = getTotalAmount(filteredData?.data.expense);

  const INCOME: IncomeItem[] = [
    {
      id: "1",
      amount: 30000,
      category: {
        icon: "credit-card-check-outline",
        name: "income",
        alias: "Income",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
  ];

  const EXPENSES: ExpenseItem[] = [
    {
      id: "1",
      amount: 5000,
      category: {
        icon: "home-city",
        name: "utilities",
        alias: "Rent",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
    {
      id: "2",
      amount: 1700,
      category: {
        icon: "wifi",
        name: "utilities",
        alias: "Internet",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
    {
      id: "3",
      amount: 2500,
      category: {
        icon: "lightning-bolt",
        name: "utilities",
        alias: "Energies",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
    {
      id: "4",
      amount: 500,
      category: {
        icon: "cup-water",
        name: "utilities",
        alias: "Water",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
    {
      id: "5",
      amount: 1000,
      category: {
        icon: "hanger",
        name: "savings",
        alias: "Rainy Days",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
    {
      id: "6",
      amount: 2000,
      category: {
        icon: "chart-box",
        name: "misc",
        alias: "Loans",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
    {
      id: "7",
      amount: 1000,
      category: {
        icon: "handshake",
        name: "misc",
        alias: "Debt",
      },
      date: "2024-01-22T08:47:03.512Z",
    },
  ];

  const DATA = {
    name: "Febuary",
    date: "02-01-2024",
    plannedTotal: 13700,
    income: INCOME,
    expenses: EXPENSES,
  };

  const BUTTONS = [
    {
      name: "Plan",
      onPress: () => Alert.alert("Plan"),
    },
    {
      name: "Actual",
      onPress: () => Alert.alert("Actual"),
    },
    {
      name: "Insights",
      onPress: () => Alert.alert("Insights"),
    },
  ];

  return {
    BUTTONS,
    selectedBtn,
    setSelectedBtn,
    DATA,
    filteredData,
    plannedTotal,
    getCategory,
  };
};
