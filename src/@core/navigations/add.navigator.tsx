import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddStackParamList } from '@types';
import { AddOptionScreen } from '@scenes/add-option';
import AddNewBudget from '@scenes/budget/screens/add-new-budget.screen';

const Stack = createNativeStackNavigator<AddStackParamList>();

export function AddNavigator() {

  const initialRouteName: keyof AddStackParamList = "Add Option"

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="Add Option" component={AddOptionScreen} />
      <Stack.Screen name="New Budget" component={AddNewBudget} />
    </Stack.Navigator>
  )
}