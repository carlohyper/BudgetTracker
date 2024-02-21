import React from 'react'
import { Button, View, Text } from 'react-native'

import { Props } from '../../types';

export function Welcome({ navigation }: Props) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome</Text>
      <Button title='fuck you dave' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}