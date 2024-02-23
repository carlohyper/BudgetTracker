import * as React from "react";
import { Alert, Text } from "react-native";

import { ActionContainer } from "../styles/budget-details.style";

import { DynamicCard, DynamicCurrency } from "@components";

interface BudgetActualProps {
  data: string;
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
        <Text>List of Income Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Utilities"
        onPress={() => Alert.alert("Add Utilities")}
        subLabel={
          <Text>
            <DynamicCurrency amount="5000" />
            &nbsp; / &nbsp;
            <DynamicCurrency amount="4800" color="#00dd55" size={12} />
          </Text>
        }
      >
        <Text>List of Utilities Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Savings"
        onPress={() => Alert.alert("Add Savings")}
        subLabel={
          <Text>
            <DynamicCurrency amount="2000" />
            &nbsp; / &nbsp;
            <DynamicCurrency amount="2000" color="#AAAAAA" size={12} />
          </Text>
        }
      >
        <Text>List of Savings Here</Text>
      </DynamicCard>
      <DynamicCard
        title="Miscelleneous"
        onPress={() => Alert.alert("Add Miscelleneous")}
        subLabel={
          <Text>
            <DynamicCurrency amount="3000" />
            &nbsp; / &nbsp;
            <DynamicCurrency amount="4000" color="#FF0000" size={12} />
          </Text>
        }
      >
        <Text>List of Miscelleneous Here</Text>
      </DynamicCard>
    </ActionContainer>
  );
};
