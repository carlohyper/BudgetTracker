import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Layout } from "@components";

import { useBudget } from "../hooks/use-budget.hook";
import {
  ListContainer,
  ListItem,
  StyledScrollView,
  styles,
} from "../styles/budget.style";

export default () => {
  const { DATA } = useBudget();
  return (
    <Layout padding={20}>
      <StyledScrollView>
        <ListContainer style={styles.container}>
          {DATA.map((item, index) => (
            <ListItem key={index}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.period}>{item.period} Budget</Text>
              </View>
              <TouchableOpacity onPress={item.onPress}>
                <FontAwesome5 style={styles.icon} name="chevron-right" />
              </TouchableOpacity>
            </ListItem>
          ))}
        </ListContainer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.btnText}>Add Budget</Text>
        </TouchableOpacity>
      </StyledScrollView>
    </Layout>
  );
};
