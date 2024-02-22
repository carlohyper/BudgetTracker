import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const DetailContainer = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const CardContainer = styled.View`
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #eee;
`;

export const DateSelector = styled(CardContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
`;

export const PlannedExpenses = styled(CardContainer)`
  padding: 20px 25px;
  row-gap: 20px;
`;

export const PlannedHeader = styled.View`
  flex-direction: row;
`;

export const PlannedAction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  column-gap: 10px;
`;

export const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#a8a8a8",
    textTransform: "uppercase",
  },
  cost: {
    fontSize: 20,
    fontWeight: "700",
  },
  icon: {
    textAlign: "center",
    borderRadius: 10,
    marginRight: 10,
  },
  actionBtnWrapper: {
    width: "30%",
    flexGrow: 1,
    color: "#000",
  },
  actionBtn: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    backgroundColor: "#f5f6fa",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: "100%",
  },
  actionBtnActive: {
    backgroundColor: "#000",
    color: "#FFF",
  },
});
