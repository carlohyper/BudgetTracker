import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer, styles } from "../styles/budget-details.style";

import { CardItem, DynamicCard, DynamicCurrency } from "@components";
import { iIncome } from "../interfaces";
import { getTotalAmount } from "@core/helpers";

interface BudgetPlanProps {
  data: {
    income: Array<iIncome>;
    expenses: Array<iIncome>;
  };
}

export const BudgetPlan: React.FC<Partial<BudgetPlanProps>> = ({ data }) => {
  return (
    <ActionContainer>
      <DynamicCard
        title="Income"
        showActionIcon={true}
        onPress={() => Alert.alert("Add Income")}
      >
        {data?.income?.map((item, index) => (
          <CardItem
            key={index}
            shape="circle"
            iconName={item.category.icon}
            text={item.name}
            textPosition="right"
            amount={item.amount}
          />
        ))}
      </DynamicCard>
      <DynamicCard
        title="Utilities"
        onPress={() => Alert.alert("Add Utilities")}
        subLabel={
          <DynamicCurrency
            amount={getTotalAmount(data?.expenses, "utilities")!}
          />
        }
      >
        {data?.expenses
          ?.filter((item) => item.category.name === "utilities")
          .map((item, index) => (
            <CardItem
              key={index}
              shape="circle"
              iconName={item.category.icon}
              text={item.name}
              textPosition="right"
              amount={item.amount}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Savings"
        onPress={() => Alert.alert("Add Savings")}
        subLabel={
          <DynamicCurrency
            amount={getTotalAmount(data?.expenses, "savings")!}
          />
        }
      >
        {data?.expenses
          ?.filter((item) => item.category.name === "savings")
          .map((item, index) => (
            <CardItem
              key={index}
              shape="circle"
              iconName={item.category.icon}
              text={item.name}
              textPosition="right"
              amount={item.amount}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Miscelleneous"
        onPress={() => Alert.alert("Add Miscelleneous")}
        subLabel={
          <DynamicCurrency amount={getTotalAmount(data?.expenses, "misc")!} />
        }
      >
        {data?.expenses
          ?.filter((item) => item.category.name === "misc")
          .map((item, index) => (
            <CardItem
              key={index}
              shape="circle"
              iconName={item.category.icon}
              text={item.name}
              textPosition="right"
              amount={item.amount}
            />
          ))}
      </DynamicCard>
    </ActionContainer>
  );
};
