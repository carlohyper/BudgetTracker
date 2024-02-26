import React from "react";
import styled from "styled-components/native";

import ExpenseForm from "./expense-form";
import IncomeForm from "./income-form";

import { useAddExpense } from "../hooks/use-add-expense.hook";
import { Categories } from "./categories.modal";

export interface ExpenseType {
  showModal: () => void;
  selectedCategory: Categories | undefined;
  selectType: (value: "expense" | "income") => void;
}

export default ({ showModal, selectedCategory, selectType }: ExpenseType) => {
  const { expenseType, selectedType, setSelectedType } = useAddExpense();
  return (
    <>
      <ExpenseTypeContainer>
        {expenseType.map((expense, i) => (
          <ExpenseTypeItem
            key={i}
            state={i === selectedType ? true : false}
            onPress={() => {
              setSelectedType(i);
              selectType(i === 0 ? "expense" : "income");
            }}
          >
            <ExpenseTypeItemText state={i === selectedType ? true : false}>
              {expense.name}
            </ExpenseTypeItemText>
          </ExpenseTypeItem>
        ))}
      </ExpenseTypeContainer>
      {selectedType === 0 ? (
        <ExpenseForm
          showModal={showModal}
          selectedCategory={selectedCategory}
        />
      ) : (
        <IncomeForm />
      )}
    </>
  );
};

const ExpenseTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
`;

const ExpenseTypeItem = styled.TouchableOpacity`
  background-color: ${({ state }: { state: boolean }) =>
    state ? "#000" : "#f8f8f8"};
  width: 40%;
  border-radius: 50px;
  padding: 8px;
`;

const ExpenseTypeItemText = styled.Text`
  color: ${({ state }: { state: boolean }) => (state ? "#f8f8f8" : "#000")};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
