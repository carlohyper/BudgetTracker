import React from "react";
import styled from "styled-components/native";
import { Controller, FieldValues, } from 'react-hook-form';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ExpenseType } from "../components";
import { useAddExpense } from "../hooks/use-add-expense.hook";


export default () => {
	const { control, handleSubmit, navigation } = useAddExpense();

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

	return (
		<Container>
			<Card>
      <AmountContainer>
			<MaterialCommunityIcons name='currency-php' size={18} />
			<Controller
				name="amount"
				control={control}
				render={({ field: { onChange, onBlur, value }}) => {
					return (
						<AmountFieldInput
              value={value}
              onChangeText={(val: string) => onChange(val)}
              onBlur={onBlur} 
              cursorColor='black'
              keyboardType='numeric'
              placeholder='Amount'
					/>
					)
				}}
			/>
		</AmountContainer>
        <ButtonContainer onPress={handleSubmit(onSubmit)}>
				<ButtonTitle>Save</ButtonTitle>
			</ButtonContainer>
     
				<ExpenseType />
			</Card>
		</Container>
	);
};

const AmountContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

const AmountFieldInput = styled.TextInput`
	margin-left: 5px;
	font-size: 20px;
	color: #424242;
`;

const ButtonContainer = styled.TouchableOpacity`
	background-color: #000;
	width: 90%;
	padding: 20px;
	border-radius: 12px;
	align-self: center;
`;

const ButtonTitle = styled.Text`
	color: #fff;
	font-size: 24px;
	font-weight: 700;
	text-align: center;
`;

const Container = styled.View`
	flex: 1;
	padding: 10px;
`;

const Card = styled.View`
	border-radius: 30px;
	width: 90%;

	align-self: center;
	padding: 20px;
	background-color: #fff;
`;
