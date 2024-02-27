import { ExpenseItem } from "./../../scenes/budget/interfaces/income.interface";
export const getTotalAmount = (
  data: Array<ExpenseItem> | undefined,
  type?: "utilities" | "savings" | "misc" | "income"
) => {
  let sum = 0;
  if (!data) return 0;

  if (!!type) {
    data = data.filter((item) => item.category.name === type);
  }

  data.forEach((item) => (sum += item.amount));

  return sum;
};
