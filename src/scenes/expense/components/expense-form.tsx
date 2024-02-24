import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

import FormListItem from "./form-list-item";

const ExpenseForm = () => {
	return (
		<View>
			<FormListItem title='Category' />
			<FormListItem title='Date' />
		</View>
	);
};

export default ExpenseForm
