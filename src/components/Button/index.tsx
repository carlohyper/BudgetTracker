import * as React from "react";
import styled from "styled-components/native";

import { ViewProps } from "react-native";

export interface ButtonProps extends ViewProps {
  disabled?: boolean;
  size?: "lg" | "xs";
  onPress?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  size = "lg",
  onPress = () => {},
  children,
}) => {
  const handleOnPress = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <SaveButton disabled={disabled} onPress={handleOnPress} size={size}>
      <ButtonTitle size={size}>{children}</ButtonTitle>
    </SaveButton>
  );
};

const SaveButton = styled.TouchableOpacity`
  padding: ${({ size }: ButtonProps) => (size === "lg" ? 14 : 10)}px;
  opacity: ${({ disabled }: ButtonProps) => (disabled ? 0.7 : 1)};
  background-color: #000;
  border-radius: 12px;
  align-self: center;
  width: 90%;
`;

const ButtonTitle = styled.Text`
  font-weight: ${({ size }: ButtonProps) => (size === "lg" ? 600 : 400)};
  font-size: ${({ size }: ButtonProps) => (size === "lg" ? 16 : 14)}px;
  text-align: center;
  color: #fff;
`;
