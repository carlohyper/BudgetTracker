import * as React from "react";
import { Alert, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CurrencyProps {
  icon: any;
  amount: number;
  size: number;
  color: string;
  weight: any;
}

export const styles = StyleSheet.create({
  icon: {
    textAlign: "center",
    borderRadius: 10,
    marginRight: 10,
  },
});

export const DynamicCurrency: React.FC<Partial<CurrencyProps>> = ({
  icon = "currency-php",
  amount = 0,
  size = 15,
  color = "#000000",
  weight = "normal",
}) => {
  return (
    <Text style={{ fontSize: size, fontWeight: weight, color }}>
      <MaterialCommunityIcons name={icon} style={styles.icon} size={size} />
      {amount}
    </Text>
  );
};
