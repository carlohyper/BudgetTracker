import React, { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AddStackParamList } from "@types";
import { useExpenseStore } from "src/stores/expense.store";

import { ExpenseItem } from "../interfaces";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useListOption = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<AddStackParamList, "List Options">>();
  const { optionType } = route.params;
  const { data, addTempIncome, addTempExpense } = useExpenseStore(
    (state) => state
  );
  // let filteredData = data[optionType];

  const [searchText, setSearchedText] = useState("");
  const [filteredData, setFilteredData] = useState<ExpenseItem[]>(() => {
    return data[optionType];
  });

  const [selectedTemp, setSelectedTemp] = useState<ExpenseItem[]>([]);
  const [selected, setSelected] = useState<ExpenseItem[]>([]);

  const filterItems = (query: string) => {
    setSelectedTemp([]);
    setSearchedText(query);
    // setFilteredData(data["income"]);
    // filteredData = data["income"];
    const temp = data[optionType].filter(
      (item) =>
        item.category.name.toLowerCase().includes(query.toLowerCase()) ||
        (!!item.category.alias &&
          item.category.alias.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredData(temp);
  };

  const addSelectedData = () => {
    // const temp = selected.concat(selectedTemp);
    setSelected([...selected, ...selectedTemp]);
    setSearchedText("");
  };

  const saveSelectedData = () => {
    if (optionType === "income") {
      addTempIncome(selected);
    } else {
      addTempExpense(selected);
    }

    navigation.goBack();
  };

  const removeItem = (data: ExpenseItem) => {
    const temp = selectedTemp.filter((item) => {
      item.category.name != data.category.name;
    });
    setSelectedTemp([...temp]);
  };

  return {
    searchText,
    optionType,
    filteredData,
    selectedTemp,
    selected,
    setSelectedTemp,
    setSelected,
    filterItems,
    addSelectedData,
    saveSelectedData,
    removeItem,
  };
};
