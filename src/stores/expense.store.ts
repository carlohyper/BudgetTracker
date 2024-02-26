
import { create } from 'zustand';

interface ExpenseItem {
  id: string;
  amount: number;
  category: {
    icon: string;
    name: string;
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
    expense: [],
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
