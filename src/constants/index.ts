import { IconNames } from "@types";

export const MONTH_LIST = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type Categories = {
  name: string;
  icon: IconNames;
};

export const ENTERTAINMENT: Categories[] = [
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
  {
    name: "Internet",
    icon: "wifi",
  },
];

export const UTILITIES: Categories[] = [
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

export const MISCELLANEOUS: Categories[] = [
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

export const SAVINGS: Categories[] = [
  {
    name: "Savings",
    icon: "credit-card-check-outline",
  },
];
