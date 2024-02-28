import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Controller } from "react-hook-form";

export interface IIncomeForm {
  control: any;
}

const IncomeForm = ({ control }: IIncomeForm) => {
  return (
    <>
      <Label>Title</Label>
      <IncomeInputContainer>
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <IncomeInput
                placeholder="Source of Income"
                cursorColor="black"
                value={value}
                onChangeText={(val: string) => onChange(val)}
                onBlur={onBlur}
              />
            );
          }}
        />
      </IncomeInputContainer>
    </>
  );
};

const Label = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

const IncomeInputContainer = styled.View`
  margin-top: 5px;
`;

const IncomeInput = styled.TextInput`
  margin-left: 5px;
  font-size: 20px;
  color: #424242;
`;

export default IncomeForm;
