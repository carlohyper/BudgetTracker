import * as React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ViewProps } from "react-native";
import { Text } from "../Text";
import { IconNames } from "@types";

export interface CategoryItemProps extends ViewProps {
  text?: string;
  shape?: "circle" | "rounded";
  iconName?: IconNames;
  textPosition?: "right" | "bottom";
  onPress?: () => void;
  fontSize?: number;
  color?: string;
  isDisabled?: boolean;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  text,
  textPosition = "right",
  shape = "circle",
  iconName,
  fontSize = 12,
  color = "#8e7ab5",
  onPress = () => {},
  isDisabled = false,
}) => {
  return (
    <Container textPosition={textPosition} onPress={() => onPress}>
      <IconContainer
        shape={shape}
        onPress={onPress}
        color={color}
        disabled={isDisabled}
      >
        <MaterialCommunityIcons name={iconName} size={18} />
      </IconContainer>
      <Text fontSize={fontSize} fontWeight={600}>
        {text}
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: ${({ textPosition }: CategoryItemProps) =>
    textPosition === "bottom" ? "column" : "row"};
  align-items: center;
  gap: ${({ textPosition }: CategoryItemProps) =>
    textPosition === "bottom" ? 10 : 20}px;
`;

const IconContainer = styled.TouchableOpacity`
  border-radius: ${({ shape }: CategoryItemProps) =>
    shape === "circle" ? 50 : 10}px;
  background-color: ${({ color }: CategoryItemProps) => color};
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
`;
