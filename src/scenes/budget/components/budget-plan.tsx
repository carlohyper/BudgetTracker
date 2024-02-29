import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer, styles } from "../styles/budget-details.style";

import { CardItem, DynamicCard, DynamicCurrency } from "@components";
import { IncomeItem } from "../interfaces";
import { getTotalAmount } from "@core/helpers";
import { BudgetItem } from "src/stores/interfaces";
import { useBudgetDetails } from "../hooks/use-budget-details.hook";

interface BudgetPlanProps {
  budget: BudgetItem;
}

export const BudgetPlan: React.FC<Partial<BudgetPlanProps>> = ({ budget }) => {
  const { getCategory } = useBudgetDetails();
  return (
    <ActionContainer>
      <DynamicCard
        title="Income"
        showActionIcon={true}
        onPress={() => Alert.alert("Add Income")}
      >
        {budget?.data.income.map((item, index) => (
          <CardItem
            key={index}
            shape="circle"
            iconName={item.category.icon}
            text={
              item.category.alias ? item.category.alias : item.category.name
            }
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
            amount={getTotalAmount(budget?.data.expense, "savings")!}
          />
        }
      >
        {budget?.data.expense
          ?.filter((item) => getCategory(item.category.name) === "savings")
          .map((item, index) => (
            <CardItem
              key={index}
              shape="circle"
              iconName={item.category.icon}
              text={
                item.category.alias ? item.category.alias : item.category.name
              }
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
            amount={getTotalAmount(budget?.data.expense, "utilities")!}
          />
        }
      >
        {budget?.data.expense
          ?.filter((item) => getCategory(item.category.name) === "utilities")
          .map((item, index) => (
            <CardItem
              key={index}
              shape="circle"
              iconName={item.category.icon}
              text={
                item.category.alias ? item.category.alias : item.category.name
              }
              textPosition="right"
              amount={item.amount}
            />
          ))}
      </DynamicCard>

      <DynamicCard
        title="Entertainment"
        onPress={() => Alert.alert("Add Utilities")}
        subLabel={
          <DynamicCurrency
            amount={getTotalAmount(budget?.data.expense, "entertainment")!}
          />
        }
      >
        {budget?.data.expense
          ?.filter(
            (item) => getCategory(item.category.name) === "entertainment"
          )
          .map((item, index) => (
            <CardItem
              key={index}
              shape="circle"
              iconName={item.category.icon}
              text={
                item.category.alias ? item.category.alias : item.category.name
              }
              textPosition="right"
              amount={item.amount}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Miscelleneous"
        onPress={() => Alert.alert("Add Miscelleneous")}
        subLabel={
          <DynamicCurrency
            amount={getTotalAmount(budget?.data.expense, "misc")!}
          />
        }
      >
        {budget?.data.expense
          ?.filter((item) => getCategory(item.category.name) === "misc")
          .map((item, index) => (
            <CardItem
              key={index}
              shape="circle"
              iconName={item.category.icon}
              text={
                item.category.alias ? item.category.alias : item.category.name
              }
              textPosition="right"
              amount={item.amount}
            />
          ))}
      </DynamicCard>
    </ActionContainer>
  );
};
