import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Layout } from "@components";

import { useBudget } from "../hooks/use-budget.hook";
import {
  DetailContainer,
  ListContainer,
  ListItem,
  StyledScrollView,
  styles,
} from "../styles/budget.style";

export default () => {
  const { budgetList, navigateTo, navigateToBudgetDetails } = useBudget();
  return (
    <Layout padding={20}>
      <StyledScrollView>
        <DetailContainer>
          <ListContainer style={styles.container}>
            {budgetList.length &&
              budgetList.map((item, index) => (
                <ListItem key={index}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.period}>{item.period} Budget</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigateToBudgetDetails(item.id)}
                  >
                    <FontAwesome5 style={styles.icon} name="chevron-right" />
                  </TouchableOpacity>
                </ListItem>
              ))}
            {!budgetList.length && (
              <Text style={{ fontSize: 20 }}>No Budget Yet!</Text>
            )}
          </ListContainer>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateTo("New Budget")}
          >
            <Text style={styles.btnText}>Add Budget</Text>
          </TouchableOpacity>
        </DetailContainer>
      </StyledScrollView>
    </Layout>
  );
};
