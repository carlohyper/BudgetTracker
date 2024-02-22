import { z } from 'zod'

export const addNewBudgetDetailsSchema = z.object({
    title: z.string({ required_error: 'Title is required'}),
    period: z.string(),
})

export type FieldValues = z.infer<typeof addNewBudgetDetailsSchema>