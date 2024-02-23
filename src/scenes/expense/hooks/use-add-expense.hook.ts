import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';

export const useAddExpense = () => {
    const [selectedType, setSelectedType] = React.useState(0);

  const expenseType = [
    {
      name: "Expense",
      onPress: () => console.log("first"),
    },
    {
      name: "Income",
      onPress: () => console.log("second"),
    },
  ];
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return {
        expenseType,
        navigation,
        selectedType,
        setSelectedType
    }
}