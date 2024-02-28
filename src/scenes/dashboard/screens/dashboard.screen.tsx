import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { CardItem, DynamicCard, Layout } from "@components";
import {
  DetailContainer,
  MonthSelector,
  StyledScrollView,
} from "../styles/dashboard.style";
import { useExpenseStore } from "src/stores/expense.store";
import { BarChart } from "react-native-chart-kit";
import { useDashboard } from "../hooks/dashboard.hook";
import { CustomGraph } from "../components/custom-chart";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

export default () => {
  const {
    chartData,
    chartConfig,
    screenWidth,
    graphStyle,
    monthList,
    selectedMonth,
    setSelectedMonth,
    filteredData,
    incomeData,
    totalData,
  } = useDashboard();

  const [type, setType] = useState("expenses");

  return (
    <Layout padding={20}>
      <StyledScrollView>
        <DetailContainer>
          <DynamicCard
            paddingVertical={0}
            paddingHorizontal={10}
            showHeader={false}
          >
            <Picker
              selectedValue={selectedMonth}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedMonth(itemValue)
              }
            >
              {monthList.map((item, index) => (
                <Picker.Item key={index} label={item} value={item} />
              ))}
            </Picker>
          </DynamicCard>

          <DynamicCard showHeader={false}>
            <CustomGraph data={totalData} />
          </DynamicCard>

          <ExpenseTypeContainer>
            <ExpenseTypeItem
              state={type === "expenses"}
              onPress={() => setType("expenses")}
            >
              <ExpenseTypeItemText state={type === "expenses"}>
                Expenses
              </ExpenseTypeItemText>
            </ExpenseTypeItem>
            <ExpenseTypeItem
              state={type === "income"}
              onPress={() => setType("income")}
            >
              <ExpenseTypeItemText state={type === "income"}>
                Income
              </ExpenseTypeItemText>
            </ExpenseTypeItem>
          </ExpenseTypeContainer>

          {type === "expenses" && (
            <DynamicCard
              title="Expenses"
              actionIcon="pen"
              headerPosition="center"
            >
              {filteredData?.map((item, index) => (
                <CardItem
                  key={index}
                  shape="circle"
                  iconName={item.category.icon}
                  text={
                    !!item.category.alias
                      ? item.category.alias
                      : item.category.name
                  }
                  textPosition="right"
                  amount={item.amount}
                />
              ))}
              {!filteredData.length && (
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: "#8e8e8e",
                  }}
                >
                  No Data
                </Text>
              )}
            </DynamicCard>
          )}

          {type === "income" && (
            <DynamicCard
              title="Income"
              actionIcon="pen"
              headerPosition="center"
            >
              {incomeData?.map((item, index) => (
                <CardItem
                  key={index}
                  shape="circle"
                  iconName={item.category.icon}
                  text={
                    !!item.category.alias
                      ? item.category.alias
                      : item.category.name
                  }
                  textPosition="right"
                  amount={item.amount}
                  color="#F5DD61"
                />
              ))}
              {!incomeData.length && (
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: "#8e8e8e",
                  }}
                >
                  No Data
                </Text>
              )}
            </DynamicCard>
          )}
        </DetailContainer>
      </StyledScrollView>
    </Layout>
  );
};

const ExpenseTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
`;

const ExpenseTypeItem = styled.TouchableOpacity`
  background-color: ${({ state }: { state: boolean }) =>
    state ? "#000" : "white"};
  width: 40%;
  border-radius: 50px;
  padding: 8px;
`;

const ExpenseTypeItemText = styled.Text`
  color: ${({ state }: { state: boolean }) => (state ? "#f8f8f8" : "#000")};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
