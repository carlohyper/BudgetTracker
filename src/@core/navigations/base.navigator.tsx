import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "./welcome.navigator";
import { HomeScreen } from "./home-screen.navigator";
import { BudgetDetailScreen } from "@scenes/budget";
import { RootStackParamList } from "../../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Welcome";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Budget"
        component={BudgetDetailScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
