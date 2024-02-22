import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useBudget = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "January",
      period: "Monthly",
      onPress: () => navigation.push("Budget Details"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Febuary",
      period: "Monthly",
      onPress: () => navigation.push("Budget Details"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "March",
      period: "Monthly",
      onPress: () => navigation.push("Budget Details"),
    },
  ];

  return {
    DATA,
  };
};
