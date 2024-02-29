import React from "react";
import styled from "styled-components/native";
import { Controller } from "react-hook-form";

import { useAddNewBudgetDetails } from "../hooks/use-add-new-budget-details.hook";
import { CardItem, DynamicCard, Layout } from "@components";
import { StatusBar, Text } from "react-native";
import { StyledScrollView } from "../styles/budget.style";
import { Picker } from "@react-native-picker/picker";
import { DetailContainer } from "../styles/budget-details.style";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  const {
    handleSubmit,
    navigation,
    isValid,
    control,
    monthList,
    onSubmit,
    openOptionList,
    data,
  } = useAddNewBudgetDetails();
  return (
    <Layout padding={20}>
      <StyledScrollView>
        <DetailContainer>
          <DynamicCard title="Add Details" showActionIcon={false}>
            <Space>
              <Label>Month</Label>
              <Controller
                control={control}
                name="title"
                render={({ field: { onChange, onBlur, value } }) => (
                  // <TextField
                  //   value={value}
                  //   onBlur={onBlur}
                  //   onChangeText={(text: string) => onChange(text)}
                  // />
                  <BorderLine>
                    <Picker
                      selectedValue={value}
                      onValueChange={(itemValue, itemIndex) =>
                        onChange(itemValue)
                      }
                    >
                      {monthList.map((item, index) => (
                        <Picker.Item key={index} label={item} value={item} />
                      ))}
                    </Picker>
                  </BorderLine>
                )}
              />
              <Label>{isValid}</Label>
              <Controller
                control={control}
                name="period"
                render={({ field: { value } }) => <TextField value={value} />}
              />
            </Space>
          </DynamicCard>
          <DynamicCard title="Add Items" showActionIcon={false}>
            <Space>
              <Label>Income</Label>
              <CardContainer>
                {data.tempIncome.map((item, index) => (
                  <CardItem
                    key={index}
                    shape="circle"
                    iconName={item.category.icon}
                    text={
                      !!item.category.alias
                        ? item.category.alias
                        : item.category.name
                    }
                    textPosition="right"
                    amount={item.amount}
                  />
                ))}
              </CardContainer>
              <AddButton onPress={() => openOptionList("income")}>
                <AddButtonLabel>
                  <FontAwesome5 name="plus" />
                  &nbsp; Add
                </AddButtonLabel>
              </AddButton>
            </Space>
            <Space>
              <Label>Planned Expenses</Label>
              <CardContainer>
                {data.tempExpense.map((item, index) => (
                  <CardItem
                    key={index}
                    shape="circle"
                    iconName={item.category.icon}
                    text={
                      !!item.category.alias
                        ? item.category.alias
                        : item.category.name
                    }
                    textPosition="right"
                    amount={item.amount}
                  />
                ))}
              </CardContainer>
              <AddButton onPress={() => openOptionList("expense")}>
                <AddButtonLabel>
                  <FontAwesome5 name="plus" />
                  &nbsp; Add
                </AddButtonLabel>
              </AddButton>
            </Space>
          </DynamicCard>
          <SaveButton
            disabled={
              !isValid || !data.tempExpense.length || !data.tempIncome.length
            }
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonTitle>Save</ButtonTitle>
          </SaveButton>
        </DetailContainer>
      </StyledScrollView>
    </Layout>
  );
};
const Space = styled.View`
  margin-bottom: 20px;
`;

const CardContainer = styled.View`
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 0;
  background-color: #fff;
  width: 100%;
  align-self: center;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 10px;
`;

const BorderLine = styled.View`
  border-color: #ccc;
  border-radius: 8px;
  border-width: 2px;
  font-size: 18px;
`;

const Label = styled.Text`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const TextField = styled.TextInput`
  border-color: #ccc;
  border-radius: 8px;
  border-width: 2px;
  padding: 14px 16px;
  font-size: 18px;
`;

interface SaveButtonProps {
  disabled?: boolean;
}

const SaveButton = styled.TouchableOpacity<SaveButtonProps>`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
  padding: 15px;
  border-radius: 12px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #ccc;
  padding: 12px;
  border-radius: 12px;
`;

const AddButtonLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
