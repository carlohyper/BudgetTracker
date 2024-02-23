import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BudgetNavigator } from "./budget.navigator";
import { AddNavigator } from "./add.navigator";
import { Button } from "src/components/Button";

export type BottomTabParamList = {
  Dashboard: { iconName: string };
  Add: { iconName: string };
  Budget: { iconName: string };
};

const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button>Next</Button>
    </View>
  );
};

export function HomeScreen() {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  const Stack = createNativeStackNavigator();

  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{ iconName: "book" }}
      />
      <Tab.Screen
        name="Add"
        component={AddNavigator}
        initialParams={{ iconName: "add-circle" }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetNavigator}
        initialParams={{ iconName: "radio-button-on" }}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
