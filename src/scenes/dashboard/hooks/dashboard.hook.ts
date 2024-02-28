import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import { useExpenseStore } from "src/stores/expense.store";
import { getTotalAmount } from "@core/helpers";
import { useState } from "react";
import { MONTH_LIST } from "@constants";

export const useDashboard = () => {
  const monthList = MONTH_LIST;

  const { data } = useExpenseStore((state) => state);

  const [selectedMonth, setSelectedMonth] = useState(() => {
    return monthList[new Date().getMonth()];
  });
  const chartData = {
    labels: ["Income", "Expenses", "Left"],
    datasets: [
      {
        data: [30000, 9500, 20500],
      },
    ],
  };
  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    decimalPlaces: 0,
  };

  const screenWidth = Dimensions.get("window").width;

  const graphStyle = {
    marginVertical: 8,
  };

  const sampleData = {
    income: 30000,
    expenses: getTotalAmount(data.expense),
  };

  const filteredData = data.expense.filter((item) => {
    const date = new Date(item.date);
    const month = monthList[date.getMonth()];
    return selectedMonth === month;
  });

  const totalData = {
    income: 30000,
    expenses: getTotalAmount(filteredData),
  };

  return {
    chartData,
    chartConfig,
    screenWidth,
    graphStyle,
    sampleData,
    monthList,
    selectedMonth,
    setSelectedMonth,
    filteredData,
    totalData,
  };
};
