import * as React from "react";
import { Alert, Text, View } from "react-native";

import { CardItem, DynamicCard, DynamicCurrency } from "@components";
import { getCurrencyStatus, getTextColor, getTotalAmount } from "@core/helpers";
import styled from "styled-components/native";

interface CustomGraphProps {
  data: {
    income: number;
    expenses: number;
  };
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ItemLabel = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
  color: #8e8e8e;
`;

export const CustomGraph: React.FC<Partial<CustomGraphProps>> = ({ data }) => {
  const { income, expenses } = data!;
  const left = income - expenses;
  const dataS = [14, 80, 100, 55];
  return (
    <Container>
      <ItemWrapper>
        <DynamicCurrency amount={income} size={15} weight="bold" />
        <ItemLabel>Income</ItemLabel>
      </ItemWrapper>
      <ItemWrapper>
        <DynamicCurrency amount={expenses} size={15} weight="bold" />
        <ItemLabel>Expense</ItemLabel>
      </ItemWrapper>
      <ItemWrapper>
        <DynamicCurrency
          amount={left}
          size={15}
          weight="bold"
          color={getTextColor(getCurrencyStatus(income!, expenses!, true))}
        />
        <ItemLabel>Balance</ItemLabel>
      </ItemWrapper>
    </Container>
  );
};
