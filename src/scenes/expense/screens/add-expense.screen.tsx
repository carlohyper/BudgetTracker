import { Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAddExpense } from '../hooks/use-add-expense.hook';

export default () => {
    const { expenseType, selectedType, setSelectedType, navigation } = useAddExpense()

  return (
    <Container>
      <Card>
        <AmountContainer>
          <MaterialCommunityIcons name="currency-php" size={18} />
          <AmountField cursorColor="black" keyboardType="numeric" placeholder="Amount"></AmountField>
        </AmountContainer>

        <ExpenseTypeContainer >
        {expenseType.map((expense, i) => (
            <ExpenseTypeItem key={i} state={i === selectedType? true : false} onPress={() => setSelectedType(i)}>
              <ExpenseTypeItemText state={i === selectedType? true : false}>{expense.name}</ExpenseTypeItemText>
              
            </ExpenseTypeItem>
            
        ))}
         </ExpenseTypeContainer>
        <CategoryInput>
          <CategoryText>Category</CategoryText>
          <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
        </CategoryInput>
      </Card>

      <ButtonContainer onPress={() => navigation.navigate("Add Option")}>
        <ButtonTitle>Save</ButtonTitle>
      </ButtonContainer>
    </Container>
  )
}

const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

const AmountField = styled.TextInput`
  margin-left: 5px;
  font-size: 20px;
  color: #424242;
`

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

const Container = styled.View`
  flex: 1;
  padding: 10px;
`

const Card = styled.View`
  border-radius: 30px;
  width: 90%;
  
  align-self: center;
  padding: 20px;
  background-color: #fff;
`

const ExpenseTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
`

const ExpenseTypeItem = styled.TouchableOpacity`
  background-color: ${({ state }: {state: boolean}) => (state ? "#000" : "#f8f8f8")};
  width: 40%;
  border-radius: 50px;
  padding: 8px;
`

const ExpenseTypeItemText = styled.Text`
  color: ${({ state }: { state: boolean }) => (state ? "#f8f8f8" : "#000")};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`

const CategoryInput = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`

const CategoryText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`
