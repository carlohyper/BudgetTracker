import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BudgetDetailScreen } from "@scenes/budget";

export type BottomTabParamList = {
  Dashboard: { iconName: string };
  Add: { iconName: string };
  Budget: { iconName: string };
};

const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};
const Add = () => {
  return (
    <View>
      <Text>Add</Text>
    </View>
  );
};

export function HomeScreen() {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  const Stack = createNativeStackNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{ iconName: "book" }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        initialParams={{ iconName: "add-circle" }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetDetailScreen}
        initialParams={{ iconName: "radio-button-on" }}
      />
    </Tab.Navigator>
  );
}
