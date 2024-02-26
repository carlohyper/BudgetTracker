import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AmountField = () => {
	return (
		<AmountContainer>
			<MaterialCommunityIcons name='currency-php' size={18} />
			<AmountFieldInput
				cursorColor='black'
				keyboardType='numeric'
				placeholder='Amount'
			/>
		</AmountContainer>
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

export default AmountField;
