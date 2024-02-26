import { z } from 'zod'

export const addExepenseSchema = z.object({
    amount: z.string(),
    type: z.number()
})

export type FieldValues = z.infer<typeof addExepenseSchema>