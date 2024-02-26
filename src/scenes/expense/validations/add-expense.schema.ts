import { z } from "zod";

export const addExepenseSchema = z.object({
  amount: z.string(),
  expenseType: z.string(),
  category: z.object({
    name: z.string(),
    icon: z.string(),
  }),
  date: z.date()
});

export type FieldValues = z.infer<typeof addExepenseSchema>;
