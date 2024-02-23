import React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "src/components/Button";
import { CategoryItem, IconNames } from "@components";
import styled from "styled-components/native";
import { DynamicCard, Text } from "@components";

export type Categories = {
  name: string;
  icon: IconNames;
};

const ENTERTAINMENT_CATEGORIES: Array<Categories> = [
  {
    name: "Cinema",
    icon: "movie",
  },
  {
    name: "Concert",
    icon: "music-note",
  },
  {
    name: "Gym",
    icon: "dumbbell",
  },
  {
    name: "Video Games",
    icon: "gamepad-variant",
  },
  {
    name: "Sports",
    icon: "movie",
  },
  {
    name: "Subscriptions",
    icon: "youtube-subscription",
  },
];

const UTILITIES_CATEGORIES: Array<Categories> = [
  {
    name: "Wifi",
    icon: "wifi",
  },
  {
    name: "Electricity",
    icon: "lightning-bolt",
  },
  {
    name: "Water",
    icon: "cup-water",
  },
  {
    name: "Heating",
    icon: "fire",
  },
  {
    name: "Insurance",
    icon: "lock-open",
  },
  {
    name: "Rent",
    icon: "home-city",
  },
];

const MISCELLANEOUS: Array<Categories> = [
  {
    name: "Loan",
    icon: "credit-card-check-outline",
  },
  {
    name: "Clothing",
    icon: "hanger",
  },
  {
    name: "Various",
    icon: "hand-heart",
  },
];

export default () => {
  return (
    <ScrollView>
      <View>
        <Spacer />
        <DynamicCard title="Savings">
          <Container>
            {ENTERTAINMENT_CATEGORIES.map(({ name, icon }, key) => {
              return (
                <Item key={key}>
                  <CategoryItem
                    text={name}
                    iconName={icon}
                    textPosition="bottom"
                  />
                </Item>
              );
            })}
          </Container>

          <Spacer />
          <Text fontWeight={600}>Entertainment</Text>
          <Divider />
          <Container>
            {UTILITIES_CATEGORIES.map(({ name, icon }, key) => {
              return (
                <Item key={key}>
                  <CategoryItem
                    text={name}
                    iconName={icon}
                    textPosition="bottom"
                  />
                </Item>
              );
            })}
          </Container>

          <Spacer />
          <Text fontWeight={600}>Entertainment</Text>
          <Divider />
          <Container>
            {MISCELLANEOUS.map(({ name, icon }, key) => {
              return (
                <Item key={key}>
                  <CategoryItem
                    text={name}
                    iconName={icon}
                    textPosition="bottom"
                  />
                </Item>
              );
            })}
          </Container>
        </DynamicCard>

        <Spacer />
        <Button>Save</Button>
        <Spacer />
      </View>
    </ScrollView>
  );
};

const Spacer = styled.View`
  margin-top: 20px;
`;

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled.View`
  width: 33.33%;
  margin-bottom: 14px;
`;

const Divider = styled.View`
  flex: 1;
  width: calc(100% + 40px);
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 1px;
  margin: 10px -20px;
`;
