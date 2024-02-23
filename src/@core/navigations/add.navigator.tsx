import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddStackParamList } from '@types';
import { AddOptionScreen } from '@scenes/add-option';
import { 
  AddNewBudgetScreen,
  NewBudgetItemsScreen
} from '@scenes/budget';

const Stack = createNativeStackNavigator<AddStackParamList>();

export function AddNavigator() {

  const initialRouteName: keyof AddStackParamList = "Add Option"

  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerTitleAlign: "center"}}>
      <Stack.Screen name="Add Option" component={AddOptionScreen} />
      <Stack.Screen name="New Budget" component={AddNewBudgetScreen} />
      <Stack.Screen name="New Budget Items" component={NewBudgetItemsScreen} />
    </Stack.Navigator>
  )
}