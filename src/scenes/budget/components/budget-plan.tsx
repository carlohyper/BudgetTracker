import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer, styles } from "../styles/budget-details.style";

import { DynamicCard, DynamicCurrency } from "@components";

interface BudgetPlanProps {
  data: string;
}

export const BudgetPlan: React.FC<Partial<BudgetPlanProps>> = ({ data }) => {
  return (
    <ActionContainer>
      <DynamicCard
        title="Income"
        showActionIcon={true}
        onPress={() => Alert.alert("Add Income")}
      >
        <Text>List of Income Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Utilities"
        onPress={() => Alert.alert("Add Utilities")}
        subLabel={<DynamicCurrency amount="3000" />}
      >
        <Text>List of Utilities Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Savings"
        onPress={() => Alert.alert("Add Savings")}
        subLabel={<DynamicCurrency amount="3000" />}
      >
        <Text>List of Savings Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Miscelleneous"
        onPress={() => Alert.alert("Add Miscelleneous")}
        subLabel={<DynamicCurrency amount="3000" />}
      >
        <Text>List of Miscelleneous Here</Text>
      </DynamicCard>
    </ActionContainer>
  );
};
