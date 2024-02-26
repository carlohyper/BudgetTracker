import { View } from "react-native/";
import React from "react";

import FormListItem from "./form-list-item";
import { Categories } from "./categories.modal";
import styled from "styled-components/native";
import { CategoryItem } from "@components";

export interface IExpenseForm {
  showModal: () => void;
  selectedCategory: Categories | undefined;
}

const ExpenseForm = ({ showModal, selectedCategory }: IExpenseForm) => {
  return (
    <View>
      {selectedCategory ? (
        <Category onPress={showModal}>
          <CategoryItem
            text={selectedCategory.name}
            iconName={selectedCategory.icon}
            onPress={showModal}
            fontSize={16}
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
  justify-content: space-between;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`;

export default ExpenseForm;
