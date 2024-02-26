import React, { useEffect, useState } from "react";
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
  const [selectedType, setSelectedType] = useState<"expense" | "income">();
  const { control, handleSubmit, setValue } = useAddExpense();

  const onSubmit = (data: FieldValues) => {
    // addExpense(data)
    const currentMonth = new Date().getMonth() + 1;

    if (selectedType === "expense") {
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

  const selectType = (value: "expense" | "income") => {
    setSelectedType(value);
  };

  return (
    <Container>
      <Card>
        <CategoriesModal visible={isModalShown} onSelect={selectCategory} />

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
          selectType={selectType}
        />
      </Card>

      <Button onPress={handleSubmit(onSubmit)}>Save</Button>
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
  justify-content: space-between;
  padding-bottom: 30px;
`;

const Card = styled.View`
  border-radius: 30px;
  width: 90%;

  align-self: center;
  padding: 20px;
  background-color: #fff;
`;
