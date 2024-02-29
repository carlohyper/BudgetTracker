import { IconNames } from "@types";
import { create } from "zustand";
import { BudgetItem, ExpenseItem, IncomeItem } from "./interfaces";

interface State {
  data: {
    budget: BudgetItem[];
    expense: ExpenseItem[];
    income: IncomeItem[];
    tempExpense: ExpenseItem[];
    tempIncome: IncomeItem[];
  };
  addExpense: (expense: ExpenseItem) => void;
  addIncome: (income: IncomeItem) => void;
  addTempExpense: (expense: ExpenseItem[]) => void;
  addTempIncome: (income: IncomeItem[]) => void;
  addBudget: (budget: BudgetItem) => void;
}

export const useExpenseStore = create<State>((set) => ({
  data: {
    budget: [
      {
        id: 1,
        title: "February",
        period: "Monthly",
        data: {
          income: [
            {
              id: "1",
              amount: 30000,
              category: {
                icon: "credit-card-check-outline",
                name: "Income",
                alias: "",
              },
              date: "2024-01-22T08:47:03.512Z",
            },
          ],
          name: "Gym",
          icon: "dumbbell",
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
              amount: 500,
              category: {
                icon: "dumbbell",
                name: "Gym",
                alias: "Gym Fee",
              },
              date: "2024-01-22T08:47:03.512Z",
            },
          ],
        },
        date: "2024-01-22T08:47:03.512Z",
      },
    ],
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
    income: [
      {
        id: "1",
        amount: 30000,
        category: {
          icon: "credit-card-check-outline",
          name: "Income",
          alias: "",
        },
        date: "2024-01-22T08:47:03.512Z",
      },
    ],
    tempExpense: [],
    tempIncome: [],
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
  addTempExpense: (expense) =>
    set((state) => ({
      data: {
        ...state.data,
        tempExpense: [...state.data.tempExpense, ...expense],
      },
    })),
  addTempIncome: (income) =>
    set((state) => ({
      data: {
        ...state.data,
        tempIncome: [...state.data.tempIncome, ...income],
      },
    })),
    addBudget: (budget) => set((state) => ({
      data: {
        ...state.data,
        budget: [...state.data.budget, budget]
      }
    }))
}));
