import React, { useState } from "react";
import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AddStackParamList } from "@types";
import { CardItem, DynamicCurrency, Layout } from "@components";
import { useExpenseStore } from "src/stores/expense.store";
import {
  AddButton,
  AddButtonLabel,
  ListContainer,
  ListOptionItem,
  ListOptionItemLabel,
  ListOptionLabel,
  ListOptionWapper,
  TextField,
} from "../styles/list-option.style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import { ExpenseItem } from "../interfaces";

export default () => {
  const route = useRoute<RouteProp<AddStackParamList, "List Options">>();
  const { optionType } = route.params;
  const { data, addTempIncome, addTempExpense } = useExpenseStore(
    (state) => state
  );
  // let filteredData = data[optionType];

  const [searchText, setSearchedText] = useState("");
  const [filteredData, setFilteredData] = useState<ExpenseItem[]>(() => {
    return data[optionType];
  });

  const [selectedTemp, setSelectedTemp] = useState<ExpenseItem[]>([]);
  const [selected, setSelected] = useState<ExpenseItem[]>([]);

  const filterItems = (query: string) => {
    setSelectedTemp([]);
    setSearchedText(query);
    // setFilteredData(data["income"]);
    // filteredData = data["income"];
    const temp = data[optionType].filter(
      (item) =>
        item.category.name.toLowerCase().includes(query.toLowerCase()) ||
        (!!item.category.alias &&
          item.category.alias.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredData(temp);
  };

  const addSelectedData = () => {
    // const temp = selected.concat(selectedTemp);
    setSelected([...selected, ...selectedTemp]);
    setSearchedText("");
    console.log(selected);
  };

  const saveSelectedData = () => {
    if (optionType === "income") {
      addTempIncome(selected);
    } else {
      addTempExpense(selected);
    }
  };

  return (
    <Layout padding={10}>
      <ListContainer>
        <TextField
          onChangeText={(val: string) => filterItems(val)}
          value={searchText}
          placeholder="Search Here"
        />
        <ListOptionLabel>
          {searchText ? "Choose Option" : "Selected Item"}
        </ListOptionLabel>
        <ListOptionWapper>
          {searchText &&
            filteredData?.map((item: ExpenseItem, index) => (
              <ListOptionItem key={index}>
                <BouncyCheckbox
                  size={20}
                  fillColor="#000"
                  unfillColor="#f5f5f5"
                  textStyle={{ fontSize: 16, color: "#000" }}
                  text={
                    !!item?.category.alias
                      ? item.category.alias
                      : item?.category.name
                  }
                  onPress={(isChecked: boolean) => {
                    setSelectedTemp([...selectedTemp, item]);
                  }}
                />
                <Text>{item.amount}</Text>
              </ListOptionItem>
            ))}
          {!searchText &&
            selected?.map((item: any, index) => (
              <ListOptionItem key={index}>
                {/* <BouncyCheckbox
                  size={20}
                  fillColor="#000"
                  unfillColor="#f5f5f5"
                  textStyle={{ fontSize: 16, color: "#000" }}
                  text={
                    !!item.category.alias
                      ? item.category.alias
                      : item.category.name
                  }
                /> */}
                <ListOptionItemLabel>
                  {!!item.category.alias
                    ? item.category.alias
                    : item.category.name}
                </ListOptionItemLabel>
                <DynamicCurrency amount={item.amount} size={16} />
              </ListOptionItem>
            ))}
        </ListOptionWapper>
        {searchText ? (
          <AddButton onPress={addSelectedData}>
            <AddButtonLabel>
              <FontAwesome5 name="plus" />
              &nbsp; Add {optionType}
            </AddButtonLabel>
          </AddButton>
        ) : (
          <AddButton>
            <AddButtonLabel onPress={saveSelectedData}>
              <FontAwesome5 name="plus" />
              &nbsp; Save {optionType}
            </AddButtonLabel>
          </AddButton>
        )}
      </ListContainer>
    </Layout>
  );
};
