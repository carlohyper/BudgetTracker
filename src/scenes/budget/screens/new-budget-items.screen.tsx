import { Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';

import { useAddNewBudgetDetails } from '../hooks/use-add-new-budget-details.hook';

export default () => {
  const { navigation } = useAddNewBudgetDetails();
  return (
    <View>
      <Text>NewBudgetItems</Text>
      <ButtonContainer onPress={() => navigation.navigate("Add Option")}>
        <ButtonTitle>Save</ButtonTitle>
      </ButtonContainer>
    </View>
  )
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: #000;
  width: 90%;
  padding: 20px;
  border-radius: 12px;
  align-self: center;
`

const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`
