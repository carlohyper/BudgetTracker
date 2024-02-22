import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 20px;
`;

export const ListItem = styled.View`
  flex: 1;
  padding: 25px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})``;

export const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
  },
  period: {
    fontSize: 15,
    fontWeight: "600",
    color: "#a8a8a8",
    textTransform: "uppercase",
  },
  icon: {
    padding: 15,
    backgroundColor: "#f5f6fa",
    width: 45,
    height: 45,
    textAlign: "center",
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000",
    color: "#FFF",
    padding: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "#FFF",
    textTransform: "capitalize",
  },
});
