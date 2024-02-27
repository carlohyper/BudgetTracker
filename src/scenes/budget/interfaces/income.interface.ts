import { IconNames } from "@types";

export interface iCategory {
  icon: IconNames;
  name: string;
}
export interface iIncome {
  id: string;
  name: string;
  amount: number;
  category: iCategory;
}

export interface ExpenseItem {
  id: string;
  amount: number;
  category: {
    icon: IconNames | undefined;
    name: string;
    alias?: string;
  };
  date: string;
}
