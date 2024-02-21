import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome } from './welcome.navigator'
import { HomeScreen } from './home-screen.navigator'
import { RootStackParamList } from '../../types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RootNavigator () {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}