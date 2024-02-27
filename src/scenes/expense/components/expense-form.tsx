import { View } from "react-native/";
import React from "react";

import FormListItem from "./form-list-item";
import { Categories } from "./categories.modal";
import styled from "styled-components/native";
import { CategoryItem } from "@components";
import { Controller } from "react-hook-form";

export interface IExpenseForm {
  showModal: () => void;
  selectedCategory: Categories | undefined;
  control: any;
}

const ExpenseForm = ({
  showModal,
  selectedCategory,
  control,
}: IExpenseForm) => {
  return (
    <View>
      {selectedCategory ? (
        <Category onPress={showModal}>
          <CategoryItem
            iconName={selectedCategory.icon}
            onPress={showModal}
            fontSize={16}
          />
          <Controller
            name="category.alias"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <AmountFieldInput
                  value={value}
                  onChangeText={(val: string) => onChange(val)}
                  onBlur={onBlur}
                  cursorColor="black"
                  keyboardType="numeric"
                  placeholder="Amount"
                />
              );
            }}
          />
        </Category>
      ) : (
        <FormListItem title="Category" onPress={showModal} />
      )}
    </View>
  );
};

const Category = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`;

const AmountFieldInput = styled.TextInput`
  border-radius: 12px;
  margin-left: 5px;
  padding: 5px 10px;
  font-size: 16px;
  color: #424242;
  background-color: white;
  width: 74%;
  border-width: 1px;
  border-color: black;
`;

export default ExpenseForm;
