import {
  Categories,
  ENTERTAINMENT,
  MISCELLANEOUS,
  SAVINGS,
  UTILITIES,
} from "@constants";

const checkCategory = (category: Categories[], name: string) => {
  return !!category.filter((item) => item.name === name).length;
};

export const getCategory = (name: string) => {
  if (checkCategory(ENTERTAINMENT, name)) return "entertainment";
  else if (checkCategory(UTILITIES, name)) return "utilities";
  else if (checkCategory(MISCELLANEOUS, name)) return "misc";
  else if (checkCategory(SAVINGS, name)) return "savings";
  else return "income";
};
