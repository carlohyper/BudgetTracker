import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BudgetNavigator } from "./budget.navigator";
import { AddNavigator } from "./add.navigator";
import { Button } from "src/components/Button";
import { CategoryItem } from "@components";
import { Ionicons } from "@expo/vector-icons";
import { DashboardScreen } from "@scenes/dashboard";

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
      <CategoryItem
        shape="circle"
        iconName="wifi"
        text="Wifi"
        textPosition="right"
      />
    </View>
  );
};

export function HomeScreen() {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  const Stack = createNativeStackNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Dashboard") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Budget") {
            iconName = focused ? "card" : "card-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
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
