import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { CardItem, DynamicCard, Layout } from "@components";
import {
  DetailContainer,
  MonthSelector,
  StyledScrollView,
} from "../styles/dashboard.style";
import { useExpenseStore } from "src/stores/expense.store";

export default () => {
  const { data } = useExpenseStore((state) => state);
  return (
    <Layout padding={20}>
      <StyledScrollView>
        <DetailContainer>
          <MonthSelector>
            <TouchableOpacity>
              <FontAwesome5 name="chevron-left" />
            </TouchableOpacity>
            <Text>February</Text>
            <TouchableOpacity>
              <FontAwesome5 name="chevron-right" />
            </TouchableOpacity>
          </MonthSelector>
          <DynamicCard
            title="Daily Budget"
            actionIcon="pen"
            showHeader={false}
            onPress={() => Alert.alert("Edit Budget")}
          >
            <Text>Graph Here</Text>
          </DynamicCard>
          <DynamicCard
            title="Expenses"
            actionIcon="pen"
            headerPosition="center"
          >
            {data.expense?.map((item, index) => (
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
          </DynamicCard>
        </DetailContainer>
      </StyledScrollView>
    </Layout>
  );
};
