import React from "react";
import styled from "styled-components/native";

import AmountField from "../components/amount-field";
import { ExpenseType } from "../components";
import { useAddExpense } from "../hooks/use-add-expense.hook";

export default () => {
	const { navigation } = useAddExpense();

	return (
		<Container>
			<Card>
				<AmountField />
				<ExpenseType />
			</Card>

			<ButtonContainer onPress={() => navigation.navigate("Add Option")}>
				<ButtonTitle>Save</ButtonTitle>
			</ButtonContainer>
		</Container>
	);
};

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
