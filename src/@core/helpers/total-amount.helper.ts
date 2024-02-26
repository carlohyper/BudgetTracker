import { iIncome } from "./../../scenes/budget/interfaces/income.interface";
export const getTotalAmount = (
  data: Array<iIncome> | undefined,
  type: "utilities" | "savings" | "misc" | "income"
) => {
  let sum = 0;
  if (!data) return 0;

  data
    .filter((item) => item.category.name === type)
    .forEach((item) => (sum += item.amount));

  return sum;
};
