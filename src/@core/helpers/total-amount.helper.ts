import { ExpenseItem } from "./../../scenes/budget/interfaces/income.interface";
import { getCategory } from "./check-category.helper";
export const getTotalAmount = (
  data: ExpenseItem[] | undefined,
  type?: "utilities" | "savings" | "misc" | "entertainment" | "income"
) => {
  let sum = 0;
  if (!data) return 10;

  if (!!type) {
    data = data.filter((item) => getCategory(item.category.name) === type);
  }

  data.forEach((item) => (sum += item.amount));

  return sum;
};
