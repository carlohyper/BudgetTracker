import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

interface CardProps {
  title: string;
  actionIcon: any;
  showActionIcon?: boolean;
  onPress: () => void;
  subLabel?: string | React.ReactNode;
  children: string | React.ReactNode;
  showHeader?: boolean;
}

const CardContainer = styled.View`
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #eee;
`;

const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const styles = StyleSheet.create({
  icon: {
    padding: 8,
    backgroundColor: "#f5f6fa",
    borderRadius: 100,
  },
});

export const DynamicCard: React.FC<Partial<CardProps>> = ({
  title = "insert title",
  actionIcon = "plus",
  showActionIcon = false,
  onPress,
  subLabel,
  children,
  showHeader = true,
}) => {
  const onClick = () => {
    if (typeof onPress === "function") {
      onPress();
    }
  };
  return (
    <CardContainer>
      {showHeader && (
        <>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
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
      {children}
    </CardContainer>
  );
};
