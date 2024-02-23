import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export const useBudgetDetails = () => {
  const navigation = useNavigation();
  const [selectedBtn, setSelectedBtn] = React.useState(0);

  const DATA = [
    
  ];

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
  };
};
