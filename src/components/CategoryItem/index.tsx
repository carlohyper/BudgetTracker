import * as React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ViewProps } from "react-native";
import { Text } from "../Text";

export type IconNames =
  | "piggy-bank"
  | "movie"
  | "music-note"
  | "dumbbell"
  | "gamepad-variant"
  | "volleyball"
  | "youtube-subscription"
  | "wifi"
  | "lightning-bolt"
  | "cup-water"
  | "fire"
  | "lock-open"
  | "home-city"
  | "credit-card-check-outline"
  | "hanger"
  | "hand-heart"
  | "chart-box"
  | "chart-pie"
  | "handshake"
  | "wallet"
  | "bitcoin";

export interface CategoryItemProps extends ViewProps {
  text?: string;
  shape?: "circle" | "rounded";
  iconName?: IconNames;
  textPosition?: "right" | "bottom";
  onPress?: () => void;
  fontSize?: number;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  text,
  textPosition = "right",
  shape = "circle",
  iconName,
  fontSize = 12,
  onPress = () => {},
}) => {
  return (
    <Container textPosition={textPosition} onPress={() => onPress}>
      <IconContainer shape={shape} onPress={onPress}>
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
  background-color: #8e7ab5;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
`;
