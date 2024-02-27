import { IconNames } from "@types";
import { create } from "zustand";

interface ExpenseItem {
  id: string;
  amount: number;
  category: {
    icon: IconNames | undefined;
    name: string;
    alias?: string;
  };
  date: string;
}

interface IncomeItem {
  id: string;
  amount: number;
  incomeName: string;
  icon: string;
  date: string;
}

interface State {
  data: {
    expense: ExpenseItem[];
    income: IncomeItem[];
  };
  addExpense: (expense: ExpenseItem) => void;
  addIncome: (income: IncomeItem) => void;
}

export const useExpenseStore = create<State>((set) => ({
  data: {
    expense: [
      {
        id: "1",
        amount: 5000,
        category: {
          icon: "home-city",
          name: "Rent",
          alias: "Rent",
        },
        date: "02-22-2024",
      },
      {
        id: "2",
        amount: 1700,
        category: {
          icon: "wifi",
          name: "Internet",
          alias: "Internet",
        },
        date: "02-23-2024",
      },
    ],
    income: [],
  },
  addExpense: (expense) =>
    set((state) => ({
      data: {
        ...state.data,
        expense: [...state.data.expense, expense],
      },
    })),
  addIncome: (income) =>
    set((state) => ({
      data: {
        ...state.data,
        income: [...state.data.income, income],
      },
    })),
}));
