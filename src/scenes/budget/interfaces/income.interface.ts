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
