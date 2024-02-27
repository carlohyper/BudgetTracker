import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { iIncome } from "../interfaces";

export const useBudgetDetails = () => {
  const navigation = useNavigation();
  const [selectedBtn, setSelectedBtn] = React.useState(0);

  const INCOME: Array<iIncome> = [
    {
      id: "1",
      name: "Income",
      amount: 30000,
      category: {
        icon: "credit-card-check-outline",
        name: "income",
      },
    },
  ];

  const EXPENSES: Array<iIncome> = [
    {
      id: "1",
      name: "Rent",
      amount: 5000,
      category: {
        icon: "home-city",
        name: "utilities",
      },
    },
    {
      id: "2",
      name: "Internet",
      amount: 1700,
      category: {
        icon: "wifi",
        name: "utilities",
      },
    },
    {
      id: "3",
      name: "Energies",
      amount: 2500,
      category: {
        icon: "lightning-bolt",
        name: "utilities",
      },
    },
    {
      id: "4",
      name: "Water",
      amount: 500,
      category: {
        icon: "cup-water",
        name: "utilities",
      },
    },
    {
      id: "5",
      name: "Rainy Days",
      amount: 1000,
      category: {
        icon: "hanger",
        name: "savings",
      },
    },
    {
      id: "6",
      name: "Loans",
      amount: 2000,
      category: {
        icon: "chart-box",
        name: "misc",
      },
    },
    {
      id: "7",
      name: "Debt",
      amount: 1000,
      category: {
        icon: "handshake",
        name: "misc",
      },
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
  };
};
