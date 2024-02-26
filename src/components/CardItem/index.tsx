import * as React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ViewProps } from "react-native";
import { Text } from "../Text";
import { IconNames } from "@types";
import { DynamicCurrency } from "../DynamicCurrency";
import { getTextColor } from "src/@core/helpers/currency-color.helper";

export interface CardItemProps extends ViewProps {
  text?: string;
  shape?: "circle" | "rounded";
  iconName?: IconNames;
  textPosition?: "right" | "bottom";
  amount?: number;
  actual?: number;
  isExpenses?: boolean;
}

export const CardItem: React.FC<CardItemProps> = ({
  text,
  textPosition = "right",
  shape = "circle",
  iconName,
  amount,
  actual,
  isExpenses = true,
}) => {
  let result = "";

  if (isExpenses) {
    result =
      amount === actual
        ? "equal"
        : !!amount && !!actual && amount > actual
        ? "greater"
        : "lesser";
  } else {
    result =
      amount === actual
        ? "equal"
        : !!amount && !!actual && actual > amount
        ? "greater"
        : "lesser";
  }
  return (
    <Container textPosition={textPosition}>
      <CategoryWrapper>
        <IconContainer shape={shape}>
          <MaterialCommunityIcons name={iconName} size={18} />
        </IconContainer>
        <Text fontSize={14} fontWeight={600}>
          {text}
        </Text>
      </CategoryWrapper>
      <Text>
        {amount && <DynamicCurrency amount={amount} />}
        {actual && (
          <>
            &nbsp; / &nbsp;
            <DynamicCurrency
              amount={actual}
              color={getTextColor(result)}
              size={12}
            />
          </>
        )}
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  border-radius: ${({ shape }: CardItemProps) =>
    shape === "circle" ? 50 : 10}px;
  background-color: #8e7ab5;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
`;

const CategoryWrapper = styled.View`
  flex-direction: ${({ textPosition }: CardItemProps) =>
    textPosition === "bottom" ? "column" : "row"};
  align-items: center;
  gap: ${({ textPosition }: CardItemProps) =>
    textPosition === "bottom" ? 10 : 20}px;
`;
