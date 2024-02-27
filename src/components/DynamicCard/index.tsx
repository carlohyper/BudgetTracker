import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { getJustify } from "@core/helpers";

interface CardContainerProps {
  paddingVertical?: number;
  paddingHorizontal?: number;
}

interface CardHeaderProps {
  justify?: string;
  textAlign?: string;
}

const CardContainer = styled.View<CardContainerProps>`
  padding-top: ${({ paddingVertical }) => paddingVertical}px;
  padding-bottom: ${({ paddingVertical }) => paddingVertical}px;
  padding-left: ${({ paddingHorizontal }) => paddingHorizontal}px;
  padding-right: ${({ paddingHorizontal }) => paddingHorizontal}px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #eee;
  width: 100%;
  align-self: center;
`;

const CardHeader = styled.View<CardHeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  align-items: center;
`;

const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

const Divider = styled.View`
  flex: 1;
  width: calc(100% + 40px);
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 1px;
  margin: 10px -20px;
`;

const CardContent = styled.View`
  row-gap: 10px;
`;

const styles = StyleSheet.create({
  icon: {
    padding: 8,
    backgroundColor: "#f5f6fa",
    borderRadius: 100,
  },
});

interface CardProps {
  title: string;
  actionIcon: any;
  showActionIcon?: boolean;
  onPress: () => void;
  subLabel?: string | React.ReactNode;
  children: string | React.ReactNode;
  showHeader?: boolean;
  headerPosition: "center" | "left" | "right";
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export const DynamicCard: React.FC<Partial<CardProps>> = ({
  title = "insert title",
  actionIcon = "plus",
  showActionIcon = false,
  onPress,
  subLabel,
  children,
  showHeader = true,
  headerPosition,
  paddingVertical = 20,
  paddingHorizontal = 20,
}) => {
  const onClick = () => {
    if (typeof onPress === "function") {
      onPress();
    }
  };
  return (
    <CardContainer
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
    >
      {showHeader && (
        <>
          <CardHeader justify={getJustify(headerPosition)}>
            <CardTitle style={{ textAlign: headerPosition }}>{title}</CardTitle>
            {showActionIcon ? (
              <FontAwesome5
                onPress={onClick}
                style={styles.icon}
                name={actionIcon}
                size={10}
              />
            ) : (
              <View>{subLabel}</View>
            )}
          </CardHeader>
          <Divider />
        </>
      )}
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};
