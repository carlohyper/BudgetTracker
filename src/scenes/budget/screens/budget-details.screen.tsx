import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Layout, DynamicCard } from "@components";
import {
  DateSelector,
  DetailContainer,
  PlannedAction,
  PlannedExpenses,
  PlannedHeader,
  styles,
} from "../styles/budget-details.style";

import { useBudgetDetails } from "../hooks/use-budget-details.hook";
import { StyledScrollView } from "../styles/budget.style";

export default () => {
  const { BUTTONS, selectedBtn, setSelectedBtn } = useBudgetDetails();
  return (
    <Layout padding={20}>
      <StyledScrollView>
        <DetailContainer>
          <DateSelector>
            <TouchableOpacity>
              <FontAwesome5 name="chevron-left" />
            </TouchableOpacity>
            <Text>1 Dec - 31 Dec</Text>
            <TouchableOpacity>
              <FontAwesome5 name="chevron-right" />
            </TouchableOpacity>
          </DateSelector>
          <PlannedExpenses>
            <PlannedHeader>
              <FontAwesome5 name="chart-pie" style={styles.icon} size={45} />
              <View>
                <Text style={styles.label}>Planned Expenses</Text>
                <Text style={styles.cost}>Php 5,000</Text>
              </View>
            </PlannedHeader>
            <PlannedAction>
              {BUTTONS.map((item, index) => (
                <TouchableOpacity
                  style={styles.actionBtnWrapper}
                  onPress={() => setSelectedBtn(index)}
                >
                  <Text
                    style={[
                      styles.actionBtn,
                      selectedBtn === index && styles.actionBtnActive,
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </PlannedAction>
          </PlannedExpenses>
          <DynamicCard
            title="Income"
            isExpenses={false}
            onPress={() => Alert.alert("Add Income")}
          >
            <Text>List of Income Here</Text>
          </DynamicCard>
          <DynamicCard
            title="Utilities"
            onPress={() => Alert.alert("Add Utilities")}
            subLabel={<Text>Php 5000</Text>}
          >
            <Text>List of Utilities Here</Text>
          </DynamicCard>
          <DynamicCard
            title="Savings"
            onPress={() => Alert.alert("Add Savings")}
            subLabel={<Text>Php 2000</Text>}
          >
            <Text>List of Savings Here</Text>
          </DynamicCard>
          <DynamicCard
            title="Miscellemeous"
            onPress={() => Alert.alert("Add Miscellemeous")}
            subLabel={<Text>Php 3000</Text>}
          >
            <Text>List of Miscellemeous Here</Text>
          </DynamicCard>
        </DetailContainer>
      </StyledScrollView>
    </Layout>
  );
};
