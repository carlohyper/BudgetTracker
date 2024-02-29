import React, { useState } from "react";
import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AddStackParamList } from "@types";
import { CardItem, DynamicCurrency, Layout } from "@components";
import { useExpenseStore } from "src/stores/expense.store";
import {
  AddButton,
  AddButtonLabel,
  ListContainer,
  ListOptionItem,
  ListOptionItemLabel,
  ListOptionLabel,
  ListOptionWapper,
  TextField,
} from "../styles/list-option.style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import { ExpenseItem } from "../interfaces";
import { useListOption } from "../hooks/use-list-option.hook";

export default () => {
  const {
    searchText,
    optionType,
    filteredData,
    selected,
    selectedTemp,
    setSelectedTemp,
    filterItems,
    addSelectedData,
    saveSelectedData,
    removeItem,
  } = useListOption();

  return (
    <Layout padding={10}>
      <ListContainer>
        <TextField
          onChangeText={(val: string) => filterItems(val)}
          value={searchText}
          placeholder="Search Here"
        />
        <ListOptionLabel>
          {searchText ? "Choose Option" : "Selected Item"}
        </ListOptionLabel>
        <ListOptionWapper>
          {searchText &&
            filteredData?.map((item: ExpenseItem, index) => (
              <ListOptionItem key={index}>
                <BouncyCheckbox
                  size={20}
                  fillColor="#000"
                  unfillColor="#f5f5f5"
                  textStyle={{ fontSize: 16, color: "#000" }}
                  text={
                    !!item?.category.alias
                      ? item.category.alias
                      : item?.category.name
                  }
                  onPress={(isChecked: boolean) => {
                    if (isChecked) setSelectedTemp([...selectedTemp, item]);
                    else removeItem(item);
                  }}
                />
                <DynamicCurrency amount={item.amount} size={16} />
              </ListOptionItem>
            ))}
          {!searchText &&
            selected?.map((item: any, index) => (
              <ListOptionItem key={index}>
                <ListOptionItemLabel>
                  {!!item.category.alias
                    ? item.category.alias
                    : item.category.name}
                </ListOptionItemLabel>
                <DynamicCurrency amount={item.amount} size={16} />
              </ListOptionItem>
            ))}
        </ListOptionWapper>
        {searchText ? (
          <AddButton disabled={!selectedTemp.length} onPress={addSelectedData}>
            <AddButtonLabel>
              <FontAwesome5 name="plus" />
              &nbsp; Add {optionType}
            </AddButtonLabel>
          </AddButton>
        ) : (
          <AddButton disabled={!selected.length} onPress={saveSelectedData}>
            <AddButtonLabel>Confirm</AddButtonLabel>
          </AddButton>
        )}
      </ListContainer>
    </Layout>
  );
};
