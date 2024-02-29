import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import { DynamicCurrency, Layout } from "@components";
import { BudgetPlan, BudgetActual, BudgetInsights } from "../components";
import {
  ActionContainer,
  BudgetHeader,
  BudgetHeaderText,
  DetailContainer,
  PlannedAction,
  PlannedExpenses,
  PlannedHeader,
  styles,
} from "../styles/budget-details.style";

import { useBudgetDetails } from "../hooks/use-budget-details.hook";
import { StyledScrollView } from "../styles/budget.style";

export default () => {
  const {
    BUTTONS,
    selectedBtn,
    setSelectedBtn,
    DATA,
    filteredData,
    plannedTotal,
  } = useBudgetDetails();
  return (
    <Layout padding={20}>
      <StyledScrollView>
        <DetailContainer>
          <BudgetHeader>
            <BudgetHeaderText>{filteredData.title}</BudgetHeaderText>
          </BudgetHeader>
          <PlannedExpenses>
            <PlannedHeader>
              {/* <FontAwesome5 name="chart-pie" style={styles.icon} size={45} /> */}
              <MaterialCommunityIcons
                name="circle-slice-5"
                style={styles.icon}
                size={45}
              />
              <View>
                <Text style={styles.label}>Planned Expenses</Text>
                <DynamicCurrency
                  amount={plannedTotal}
                  size={20}
                  weight="bold"
                />
              </View>
            </PlannedHeader>
            <PlannedAction>
              {BUTTONS.map((item, index) => (
                <TouchableOpacity
                  style={styles.actionBtnWrapper}
                  onPress={() => setSelectedBtn(index)}
                  key={index}
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
          {BUTTONS[selectedBtn].name === "Plan" && (
            <BudgetPlan budget={filteredData} />
          )}
          {BUTTONS[selectedBtn].name === "Actual" && (
            <BudgetActual budget={filteredData} />
          )}
          {BUTTONS[selectedBtn].name === "Insights" && <BudgetInsights />}
        </DetailContainer>
      </StyledScrollView>
    </Layout>
  );
};
