import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer } from "../styles/budget-details.style";

import { CardItem, DynamicCard, DynamicCurrency, SubLabel } from "@components";
import { IncomeItem } from "../interfaces";
import { BudgetItem } from "src/stores/interfaces";
import { useBudgetDetails } from "../hooks/use-budget-details.hook";
import { getCurrencyStatus, getTextColor, getTotalAmount } from "@core/helpers";

interface BudgetActualProps {
  budget: BudgetItem;
}

export const BudgetActual: React.FC<Partial<BudgetActualProps>> = ({
  budget,
}) => {
  const {
    income,
    entertainment,
    utilities,
    savings,
    misc,
    getCategory,
    getIncomeAmount,
    getExpenseAmount,
  } = useBudgetDetails();
  return (
    <ActionContainer>
      <DynamicCard
        title="Income"
        showActionIcon={true}
        onPress={() => Alert.alert("Add Income")}
      >
        {budget?.data.income?.map((item, index) => (
          <CardItem
            key={index}
            shape="circle"
            iconName={item.category.icon}
            text={
              item.category.alias ? item.category.alias : item.category.name
            }
            textPosition="right"
            amount={item.amount}
            actual={getIncomeAmount(item.category.name)}
            isExpenses={false}
          />
        ))}
      </DynamicCard>
      <DynamicCard
        title="Savings"
        onPress={() => Alert.alert("Add Savings")}
        subLabel={
          <SubLabel
            amount={budget?.data.expense}
            actual={savings}
            category="savings"
          ></SubLabel>
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
              actual={getExpenseAmount(item.category.name)}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Utilities"
        onPress={() => Alert.alert("Add Utilities")}
        subLabel={
          <SubLabel
            amount={budget?.data.expense}
            actual={utilities}
            category="utilities"
          ></SubLabel>
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
              actual={getExpenseAmount(item.category.name)}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Entertainment"
        onPress={() => Alert.alert("Add Entertainment")}
        subLabel={
          <SubLabel
            amount={budget?.data.expense}
            actual={entertainment}
            category="entertainment"
          ></SubLabel>
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
              actual={getExpenseAmount(item.category.name)}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Miscelleneous"
        onPress={() => Alert.alert("Add Miscelleneous")}
        subLabel={
          <SubLabel
            amount={budget?.data.expense}
            actual={misc}
            category="misc"
          ></SubLabel>
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
              actual={getExpenseAmount(item.category.name)}
            />
          ))}
      </DynamicCard>
    </ActionContainer>
  );
};
