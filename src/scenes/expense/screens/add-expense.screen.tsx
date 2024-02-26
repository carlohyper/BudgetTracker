import React, { useState } from "react";
import styled from "styled-components/native";
import { Controller, FieldValues } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useExpenseStore } from "src/stores/expense.store";
import { ExpenseType } from "../components";
import { useAddExpense } from "../hooks/use-add-expense.hook";
import CategoriesModal, { Categories } from "../components/categories.modal";
import { Button } from "@components";

export default () => {
  const {
    addExpense,
    addIncome,
    data: storeData,
  } = useExpenseStore((state) => state);

  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Categories>();
  const { control, handleSubmit, setValue } = useAddExpense();

  const onSubmit = (data: FieldValues) => {
    // addExpense(data)
    const currentMonth = new Date().getMonth() + 1;

    if (true) {
      addExpense({
        id: "kalsdjl",
        amount: parseFloat(data.amount),
        category: {
          icon: "piggy-bank",
          name: "test",
        },
        date: currentMonth.toString(),
      });
    } else {
      addIncome({
        id: "kalsjdkla",
        amount: parseInt(data.amount),
        incomeName: "test",
        icon: "piggy-bank",
        date: currentMonth.toString(),
      });
    }
    console.log(storeData);
  };

  const selectCategory = (value: Categories) => {
    setIsModalShown(false);
    setValue("category", value);
    setSelectedCategory(value);
  };

  return (
    <Container>
      <Card>
        <AmountContainer>
          <MaterialCommunityIcons name="currency-php" size={18} />
          <Controller
            name="amount"
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
        </AmountContainer>
        <ExpenseType
          showModal={() => setIsModalShown(true)}
          selectedCategory={selectedCategory}
        />
      </Card>

      <Button onPress={handleSubmit(onSubmit)}>Save</Button>

      <CategoriesModal visible={isModalShown} onSelect={selectCategory} />
    </Container>
  );
};

const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const AmountFieldInput = styled.TextInput`
  margin-left: 5px;
  font-size: 20px;
  color: #424242;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const Card = styled.View`
  border-radius: 30px;
  width: 90%;

  align-self: center;
  padding: 20px;
  background-color: #fff;
`;
