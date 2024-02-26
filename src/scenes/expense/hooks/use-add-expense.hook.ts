import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { addExepenseSchema, FieldValues } from '../validations/add-expense.schema';

export const useAddExpense = () => {
  const defaultValues = {
    amount: '',
    expenseType: ''
}
  const {
    handleSubmit,
    control,
    formState: { isValid }
} = useForm<FieldValues>({
    defaultValues,
    mode: 'all',
    resolver: zodResolver(addExepenseSchema)
})

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
        control,
        expenseType,
        handleSubmit,
        navigation,
        selectedType,
        setSelectedType
    }
}