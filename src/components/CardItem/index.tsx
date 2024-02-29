import * as React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ViewProps } from "react-native";
import { Text } from "../Text";
import { IconNames } from "@types";
import { DynamicCurrency } from "../DynamicCurrency";
import {
  getCurrencyStatus,
  getTextColor,
} from "src/@core/helpers/currency-color.helper";
import { CategoryItem } from "../CategoryItem";

export interface CardItemProps extends ViewProps {
  text?: string;
  shape?: "circle" | "rounded";
  iconName?: IconNames | undefined;
  textPosition?: "right" | "bottom";
  amount?: number;
  actual?: number;
  isExpenses?: boolean;
  color?: string;
}

export const CardItem: React.FC<CardItemProps> = ({
  text,
  textPosition = "right",
  shape = "circle",
  iconName,
  amount,
  actual,
  isExpenses = true,
  color,
}) => {
  return (
    <Container textPosition={textPosition}>
      <CategoryWrapper>
        <CategoryItem
          iconName={iconName}
          text={text}
          fontSize={14}
          color={color}
          isDisabled={true}
        />
      </CategoryWrapper>
      <Text>
        {amount != undefined && <DynamicCurrency amount={amount} />}
        {actual != undefined && (
          <>
            &nbsp; / &nbsp;
            <DynamicCurrency
              amount={actual}
              color={getTextColor(
                getCurrencyStatus(amount!, actual!, isExpenses)
              )}
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

const CategoryWrapper = styled.View`
  flex-direction: ${({ textPosition }: CardItemProps) =>
    textPosition === "bottom" ? "column" : "row"};
  align-items: center;
  gap: ${({ textPosition }: CardItemProps) =>
    textPosition === "bottom" ? 10 : 20}px;
`;
