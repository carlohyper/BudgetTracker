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

export interface BudgetItem {
  id: string | number;
  title: string; // From Month input
  period: string; // Default Monthly
  data: {
    income: IncomeItem[]; // Default value is []
    expense: ExpenseItem[]; // Default value is []
  };
  date: string;
}
