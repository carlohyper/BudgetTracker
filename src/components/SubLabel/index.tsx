import * as React from "react";
import { Text } from "react-native";
import { getCurrencyStatus, getTextColor, getTotalAmount } from "@core/helpers";
import { DynamicCurrency } from "../DynamicCurrency";
import { ExpenseItem } from "src/stores/interfaces";

interface SubLabelProps {
  amount: ExpenseItem[];
  actual: ExpenseItem[];
  category: "utilities" | "savings" | "misc" | "entertainment" | "income";
}

export const SubLabel: React.FC<Partial<SubLabelProps>> = ({
  amount,
  actual,
  category,
}) => {
  return (
    <Text>
      <DynamicCurrency amount={getTotalAmount(amount, category)} />
      &nbsp; / &nbsp;
      <DynamicCurrency
        amount={getTotalAmount(actual, category)}
        color={getTextColor(
          getCurrencyStatus(
            getTotalAmount(amount, category)!,
            getTotalAmount(actual, category),
            true
          )
        )}
        size={12}
      />
    </Text>
  );
};
