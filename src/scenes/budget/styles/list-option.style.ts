import styled from "styled-components/native";

export const ListContainer = styled.View`
  row-gap: 20px;
`;

export const ListOptionWapper = styled.View`
  width: "100%";
  justify-content: center;
  row-gap: 1px;
`;

export const ListOptionItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  width: "100%";
  padding: 15px;
  background-color: #ccc;
`;

export const ListOptionItemLabel = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const ListOptionLabel = styled.Text`
  font-size: 20px;
  text-align: center;
`;

interface AddButtonProps {
  disabled?: boolean;
}

export const AddButton = styled.Pressable<AddButtonProps>`
  /* background-color: #000; */
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
  padding: 12px;
  border-radius: 12px;
`;

export const AddButtonLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
`;

export const TextField = styled.TextInput`
  border-color: #ccc;
  border-radius: 8px;
  border-width: 2px;
  padding: 14px 16px;
  font-size: 18px;
`;
