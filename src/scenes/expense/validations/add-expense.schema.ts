import { z } from 'zod'

export const addExepenseSchema = z.object({
    amount: z.string()
})

export type FieldValues = z.infer<typeof addExepenseSchema>