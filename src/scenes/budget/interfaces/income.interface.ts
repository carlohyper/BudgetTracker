import { IconNames } from "@types";

export interface ExpenseItem {
  id: string;
  amount: number;
  actual?: number;
  category: {
    icon: IconNames | undefined;
    name: string;
    alias?: string;
  };
  date: string;
}

export interface IncomeItem {
  id: string;
  amount: number;
  actual?: number;
  category: {
    icon: IconNames | undefined;
    name: string;
    alias?: string;
  };
  date: string;
}
