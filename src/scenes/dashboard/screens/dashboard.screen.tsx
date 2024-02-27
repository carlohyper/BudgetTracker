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
    totalData,
  } = useDashboard();
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
                <Picker.Item
                  key={index}
                  label={item}
                  value={item}
                />
              ))}
            </Picker>
          </DynamicCard>
          <DynamicCard showHeader={false}>
            <CustomGraph data={totalData} />
          </DynamicCard>
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
                style={{ fontSize: 18, textAlign: "center", color: "#8e8e8e" }}
              >
                No Data
              </Text>
            )}
          </DynamicCard>
        </DetailContainer>
      </StyledScrollView>
    </Layout>
  );
};
