import * as React from "react";
import styled from "styled-components/native";

import { ViewProps } from "react-native";

export interface TextProps extends ViewProps {
  fontSize?: number;
  fontWeight?: number;
  textTransform?: string;
}

export const Text: React.FC<TextProps> = ({
  fontSize = 14,
  fontWeight = 400,
  textTransform = "capitalize",
  children,
}) => {
  return (
    <TextComponent
      fontSize={fontSize}
      fontWeight={fontWeight}
      textTransform={textTransform}
    >
      {children}
    </TextComponent>
  );
};

const TextComponent = styled.Text`
  font-size: ${({ fontSize }: TextProps) => fontSize}px;
  font-weight: ${({ fontWeight }: TextProps) => fontWeight};
  text-transform: ${({ textTransform }: TextProps) => textTransform};
  margin: 0;
  padding: 0;
`;
