import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "./welcome.navigator";
import { HomeScreen } from "./home-screen.navigator";
import { BudgetScreen } from "@scenes/budget";
import { BudgetDetailsScreen } from "@scenes/budget";
import { RootStackParamList, BudgetStackParamList } from "@types";
import { Text } from "react-native";

const Stack = createNativeStackNavigator<BudgetStackParamList>();

export function BudgetNavigator() {
  const initialRouteName: keyof BudgetStackParamList = "Budget List";

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen
        name="Budget List"
        component={BudgetScreen}
        options={{
          headerTitle: "Budget",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Budget Details"
        component={BudgetDetailsScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
