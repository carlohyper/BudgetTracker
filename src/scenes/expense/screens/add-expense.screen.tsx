import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Controller, FieldValues } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "react-native-ui-datepicker";
import uuid from "uuidv4";

import { Button } from "@components";
import Form from "src/components/Forms/form";
import FormInput from "src/components/Forms/form-input";
import FormButton from "src/components/Forms/form-button";
import { useExpenseStore } from "src/stores/expense.store";
import { ExpenseType } from "../components";
import { useAddExpense } from "../hooks/use-add-expense.hook";
import CategoriesModal, { Categories } from "../components/categories.modal";
import { addExepenseSchema } from "../validations/add-expense.schema";

export default () => {
  const {
    addExpense,
    addIncome,
    data: storeData,
  } = useExpenseStore((state) => state);

  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Categories>();
  const { control, date, handleSubmit, setDate, setValue, navigation } =
    useAddExpense();
  const [selectedType, setSelectedType] = useState<"expense" | "income">(
    "expense"
  );

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    // if (selectedType === "expense") {
    //   return addExpense({
    //     id: uuid(),
    //     amount: parseInt(data.amount),
    //     category: {
    //       icon: data.category.icon,
    //       name: data.category.name,
    //       alias: data.category.alias,
    //     },
    //     date: data.date,
    //   });
    // }
    // addIncome({
    //   id: uuid(),
    //   amount: parseInt(data.amount),
    //   category: {
    //     icon: "wallet",
    //     name: "Salary",
    //     alias: data.title,
    //   },
    //   date: data.date,
    // });

    navigation.goBack();
  };

  const selectCategory = (value: Categories) => {
    setIsModalShown(false);
    setValue("category", {
      name: value.name,
      icon: value.icon,
      alias: value.name,
    });
    setSelectedCategory(value);
  };

  const selectType = (value: "expense" | "income") => {
    setSelectedType(value);
  };

  return (
    <Container>
      <Card>
        <Form valdiationSchema={addExepenseSchema}>
          <FormInput name="amount" control={control} />
        </Form>
        {/* <CategoriesModal visible={isModalShown} onSelect={selectCategory} />
        <FormInput name="amount" label="Amount" />
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
          control={control}
        />

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DateTimePicker
              mode="single"
              date={date}
              selectedItemColor="black"
              onChange={({ date }) => {
                setDate(date);
              }}
            />
          )}
        /> */}
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
