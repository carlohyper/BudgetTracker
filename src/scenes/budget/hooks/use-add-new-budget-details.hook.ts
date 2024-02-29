import React from "react";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  FieldValues,
  addNewBudgetDetailsSchema,
} from "../validations/add-new-budget-details-schema";

import { MONTH_LIST } from "@constants";
import { useExpenseStore } from "src/stores/expense.store";

export const useAddNewBudgetDetails = () => {
  const monthList = MONTH_LIST;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { data, addBudget } = useExpenseStore((state) => state);

  const defaultValues = {
    title: monthList[new Date().getMonth()],
    period: "monthly",
    data: {
      income: [],
      expense: [],
    },
  };

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FieldValues>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(addNewBudgetDetailsSchema),
  });

  const onSubmit = (formData: any) => {
    const form = { ...formData };
    form.data = {
      ...formData,
      data: {
        income: [...data.tempIncome],
        expense: [...data.tempExpense],
      },
    };
    addBudget(form.data);
    navigation.navigate("Budget");
    // navigation.navigate("Budget", {
    //   screen: "Budget Details",
    //   params: { budgetId: "1" },
    // });
  };

  const openOptionList = (type: "income" | "expense") => {
    navigation.navigate("List Options", { optionType: type });
  };

  return {
    handleSubmit,
    isValid,
    control,
    navigation,
    monthList,
    onSubmit,
    openOptionList,
    data,
  };
};
