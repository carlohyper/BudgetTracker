import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const IncomeForm = () => {
	return (
		<>
			<Label>Title</Label>
			<IncomeInputContainer>
				<IncomeInput placeholder='Source of Income' cursorColor='black' />
			</IncomeInputContainer>
		</>
	);
};

const Label = styled.Text`
	font-size: 14px;
	font-weight: 500;
`;

const IncomeInputContainer = styled.View`
	margin-top: 5px;
`;

const IncomeInput = styled.TextInput`
	margin-left: 5px;
	font-size: 20px;
	color: #424242;
`;

export default IncomeForm;
