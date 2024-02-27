import { IconNames } from "@types";
import { create } from "zustand";
import { ExpenseItem, IncomeItem } from "./interfaces";

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
        date: "2024-01-22T08:47:03.512Z",
      },
      {
        id: "2",
        amount: 1700,
        category: {
          icon: "wifi",
          name: "Internet",
          alias: "Internet",
        },
        date: "2024-02-23T08:47:03.512Z",
      },
      {
        id: "3",
        amount: 5000,
        category: {
          icon: "cup-water",
          name: "Water",
          alias: "Water",
        },
        date: "2024-02-27T08:47:03.512Z",
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
