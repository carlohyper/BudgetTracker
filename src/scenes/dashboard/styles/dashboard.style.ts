import styled from "styled-components/native";

export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})``;

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

export const MonthSelector = styled(CardContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
`;
