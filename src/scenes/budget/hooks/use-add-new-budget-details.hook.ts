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
  const { data } = useExpenseStore((state) => state);

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

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate("New Budget Items");
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
