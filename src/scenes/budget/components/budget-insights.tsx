import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer } from "../styles/budget-details.style";

import { DynamicCard, DynamicCurrency } from "@components";

interface BudgetInsightsProps {
  data: string;
}

export const BudgetInsights: React.FC<Partial<BudgetInsightsProps>> = ({
  data,
}) => {
  return (
    <ActionContainer>
      <DynamicCard
        title="Daily Budget"
        showActionIcon={true}
        actionIcon="pen"
        onPress={() => Alert.alert("Edit Budget")}
      >
        <Text>Your Daily Budget Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Daily Budget"
        actionIcon="pen"
        showHeader={false}
        onPress={() => Alert.alert("Edit Budget")}
      >
        <Text>Graph Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Projection"
        actionIcon="pen"
        onPress={() => Alert.alert("Edit Budget")}
        subLabel={
          <Text>
            <DynamicCurrency amount={5000} color="#00dd55" />
          </Text>
        }
      >
        <Text>Your Projection Here</Text>
      </DynamicCard>
    </ActionContainer>
  );
};
