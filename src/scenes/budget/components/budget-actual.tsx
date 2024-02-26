import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer } from "../styles/budget-details.style";

import { CardItem, DynamicCard, DynamicCurrency } from "@components";
import { iIncome } from "../interfaces";

interface BudgetActualProps {
  data: {
    income: Array<iIncome>;
    expenses: Array<iIncome>;
  };
}

export const BudgetActual: React.FC<Partial<BudgetActualProps>> = ({
  data,
}) => {
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
            actual={31800}
            isExpenses={false}
          />
        ))}
      </DynamicCard>
      <DynamicCard
        title="Utilities"
        onPress={() => Alert.alert("Add Utilities")}
        subLabel={
          <Text>
            <DynamicCurrency amount={5000} />
            &nbsp; / &nbsp;
            <DynamicCurrency amount={4800} color="#00dd55" size={12} />
          </Text>
        }
      >
        <CardItem
          shape="circle"
          iconName="wifi"
          text="Wifi"
          textPosition="right"
          amount={1000}
          actual={900}
        />
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
              actual={900}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Savings"
        onPress={() => Alert.alert("Add Savings")}
        subLabel={
          <Text>
            <DynamicCurrency amount={2000} />
            &nbsp; / &nbsp;
            <DynamicCurrency amount={2000} color="#AAAAAA" size={12} />
          </Text>
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
              actual={900}
            />
          ))}
      </DynamicCard>
      <DynamicCard
        title="Miscelleneous"
        onPress={() => Alert.alert("Add Miscelleneous")}
        subLabel={
          <Text>
            <DynamicCurrency amount={3000} />
            &nbsp; / &nbsp;
            <DynamicCurrency amount={4000} color="#FF0000" size={12} />
          </Text>
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
              actual={900}
            />
          ))}
      </DynamicCard>
    </ActionContainer>
  );
};
