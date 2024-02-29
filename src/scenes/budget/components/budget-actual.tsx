import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer } from "../styles/budget-details.style";

import { CardItem, DynamicCard, DynamicCurrency } from "@components";
import { IncomeItem } from "../interfaces";
import { BudgetItem } from "src/stores/interfaces";
import { useBudgetDetails } from "../hooks/use-budget-details.hook";
import { getTotalAmount } from "@core/helpers";

interface BudgetActualProps {
  budget: BudgetItem;
}

export const BudgetActual: React.FC<Partial<BudgetActualProps>> = ({
  budget,
}) => {
  const { getCategory } = useBudgetDetails();
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
            actual={31800}
            isExpenses={false}
          />
        ))}
      </DynamicCard>
      <DynamicCard
        title="Savings"
        onPress={() => Alert.alert("Add Savings")}
        subLabel={
          <Text>
            <DynamicCurrency
              amount={getTotalAmount(budget?.data.expense, "savings")}
            />
            &nbsp; / &nbsp;
            <DynamicCurrency amount={2000} color="#AAAAAA" size={12} />
          </Text>
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
              actual={900}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Utilities"
        onPress={() => Alert.alert("Add Utilities")}
        subLabel={
          <Text>
            <DynamicCurrency
              amount={getTotalAmount(budget?.data.expense, "utilities")}
            />
            &nbsp; / &nbsp;
            <DynamicCurrency amount={4800} color="#00dd55" size={12} />
          </Text>
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
              actual={900}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Entertainment"
        onPress={() => Alert.alert("Add Entertainment")}
        subLabel={
          <Text>
            <DynamicCurrency
              amount={getTotalAmount(budget?.data.expense, "entertainment")}
            />
            &nbsp; / &nbsp;
            <DynamicCurrency amount={4800} color="#00dd55" size={12} />
          </Text>
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
              actual={900}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Miscelleneous"
        onPress={() => Alert.alert("Add Miscelleneous")}
        subLabel={
          <Text>
            <DynamicCurrency
              amount={getTotalAmount(budget?.data.expense, "misc")}
            />
            &nbsp; / &nbsp;
            <DynamicCurrency amount={4000} color="#FF0000" size={12} />
          </Text>
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
              actual={900}
            />
          ))}
      </DynamicCard>
    </ActionContainer>
  );
};
