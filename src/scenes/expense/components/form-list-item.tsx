import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface FormListItemProps {
  title: string;
  onPress?: () => void;
  selectType: (value: "expense" | "income") => void;
}

const FormListItem = ({ title, onPress }: FormListItemProps) => {
  return (
    <CategoryInput onPress={onPress}>
      <CategoryText>{title}</CategoryText>
      <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
    </CategoryInput>
  );
};

const CategoryInput = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`;

const CategoryText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export default FormListItem;
